import React, {createRef} from 'react'
import {connect} from "react-redux";
import {Button, FormHelperText, Grid, Paper, TextField, Typography, withStyles, withWidth} from '@material-ui/core';
import {isWidthDown} from '@material-ui/core/withWidth';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import {importData, toggleImportDialog} from 'store/main/actions';
import {AppDialog, AppDialogActions, AppDialogContent} from 'components/shared';
import Dropzone from 'react-dropzone';
import {buttonStyles, mergeStyles} from 'utils/themes';
import {compose} from 'redux';
import {sanitizeTrackerData} from 'utils/sanitizer';
import {ImportSettings} from 'components/ImportData';

const styles = theme => (mergeStyles({
    dragContainer: {
        position: 'relative'
    },
    dragActiveWrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    dragActive: {
        borderStyle: 'dashed',
        borderWidth: theme.spacing.unit / 2,
        borderRadius: theme.spacing.unit * 2,
        height: '100%',
        opacity: .3
    },
    inputErrorText: {textAlign: 'center'},
}, buttonStyles(theme)));

class ImportDialog extends React.Component {
    state = {
        importTextData: '',
        importErrorText: '',
        ignoreHideouts: false,
        ignoreInProgressIncursions: false,
        ignoreCompletedIncursions: false,
    };

    changeImportText = (text) => {
        this.setState({
            importTextData: text,
            importErrorText: '',
        });
    };

    handleToggleSettings = (value) => {
        this.setState({
            ...this.state,
            [value]: !this.state[value]
        });
    };

    handleResetState = () => {
        this.setState({
            importTextData: '',
            importErrorText: '',
            ignoreHideouts: false,
            ignoreInProgressIncursions: false,
            ignoreCompletedIncursions: false,
        });
    };

    handleCloseDialog = () => this.props.toggleImportDialog(false);

    onDrop = acceptedFiles => {
        const reader = new FileReader();
        reader.onload = () => {
            try {
                const fileData = sanitizeTrackerData(JSON.parse(reader.result.toString()));
                this.changeImportText(JSON.stringify(fileData, null, 2));
            } catch (e) {
                this.setState({
                    importErrorText: 'Unable to read tracker file.'
                });
            }
        };

        acceptedFiles.forEach(file => reader.readAsBinaryString(file));
    };

    handleContentDataChange = event => this.changeImportText(event.target.value);

    handleDropZoneOpen = (dropzoneRef) => () => dropzoneRef.current.open();

    handleContentDataLoad = () => {
        const {importTextData, ignoreHideouts, ignoreInProgressIncursions, ignoreCompletedIncursions} = this.state;
        try {
            this.props.importData({
                data: JSON.parse(importTextData),
                opts: {
                    ignoreHideouts,
                    ignoreInProgressIncursions,
                    ignoreCompletedIncursions,
                }
            });
            this.handleCloseDialog();
        } catch (e) {
            this.setState({
                importErrorText: 'Your tracker data is invalid.'
            });
        }
    };

    render() {
        const {classes, width, showDialog} = this.props;
        const {importTextData, importErrorText,  ignoreHideouts, ignoreInProgressIncursions, ignoreCompletedIncursions} = this.state;
        const canImportData = !(ignoreHideouts && ignoreInProgressIncursions && ignoreCompletedIncursions) && importTextData.length > 0;
        const dropzoneRef = createRef();
        return (
            <AppDialog
                open={showDialog}
                onEntering={this.handleResetState}
                onClose={this.handleCloseDialog}
                fullWidth
                maxWidth="md"
                titleText="Import tracker data"
            >

                <AppDialogContent>
                    <Dropzone ref={dropzoneRef} noClick={true} onDrop={this.onDrop} multiple={false}>
                        {({getRootProps, getInputProps, isDragActive}) => (
                            <div {...getRootProps({className: classes.dragContainer})}>
                                <input {...getInputProps()} />
                                <TextField
                                    placeholder="Copy your import data here, or drag a tracker file to import it."
                                    fullWidth
                                    multiline
                                    rows="8"
                                    value={importTextData}
                                    onChange={this.handleContentDataChange}
                                    margin="normal"
                                    variant="outlined"
                                    error={!!importErrorText}
                                />
                                <FormHelperText error className={classes.inputErrorText}>
                                    {importErrorText}
                                </FormHelperText>
                                {
                                    isDragActive && (
                                        <Paper elevation={0} className={classes.dragActiveWrapper}>
                                            <Grid container direction="column" alignItems="center" justify="center"
                                                  className={classes.dragActive}>
                                                <Grid item>
                                                    <Typography variant="h4">Drop your file here</Typography>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    )
                                }
                            </div>
                        )}
                    </Dropzone>
                    <ImportSettings
                        opts={{ignoreHideouts, ignoreInProgressIncursions, ignoreCompletedIncursions}}
                        onClick={this.handleToggleSettings}/>
                </AppDialogContent>
                <AppDialogActions>
                    {isWidthDown('xs', width) && (
                        <Button variant="contained" color="secondary" className={classes.button}
                                onClick={this.handleDropZoneOpen(dropzoneRef)}>
                            <AttachFileIcon className={classes.leftIcon}/>
                            Load File
                        </Button>
                    )}
                    <Button variant="contained" color="secondary" className={classes.button}
                            onClick={this.handleContentDataLoad} disabled={!canImportData}>
                        <CloudUploadIcon className={classes.leftIcon}/>
                        Import
                    </Button>
                    <Button variant="outlined" className={classes.button}
                            onClick={this.handleCloseDialog}>
                        Close
                    </Button>
                </AppDialogActions>
            </AppDialog>
        );
    }
}

export default compose(
    connect(
        state => ({
            showDialog: state.main.showImportDialog,
        }),
        dispatch => ({
            toggleImportDialog: (payload) => (dispatch(toggleImportDialog(payload))),
            importData: (payload) => (dispatch(importData(payload))),
        }),
    ),
    withStyles(styles),
    withWidth()
)(ImportDialog);
