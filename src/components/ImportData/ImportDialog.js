import React from 'react'
import {connect} from "react-redux";
import {Button, DialogContent, DialogTitle, Grid, Paper, TextField, Typography, withStyles} from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {importUpdateTextData, toggleImportDialog} from 'store/import-export/actions';
import {AppDialog, AppDialogActions} from 'components/shared';
import {importData} from 'store/main/actions';
import Dropzone from 'react-dropzone';

const styles = theme => ({
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
    button: {margin: theme.spacing.unit},
    leftIcon: {marginRight: theme.spacing.unit},
});

class ImportDialog extends React.Component {
    handleCloseDialog = () => {
        this.props.toggleImportDialog(false);
    };

    onDrop = acceptedFiles => {
        const reader = new FileReader();
        reader.onload = () => {
            try {
                const fileData = JSON.parse(reader.result);
                this.props.importData(fileData);
                this.handleCloseDialog();
            } catch (e) {
                console.log('error reading file');
            }
        };

        acceptedFiles.forEach(file => reader.readAsBinaryString(file));
    };

    handleContentDataChange = event => {
        this.props.importUpdateTextData(event.target.value);
    };

    handleContentDataLoad = () => {
        try {
            this.props.importData(JSON.parse(this.props.importTextData));
            this.handleCloseDialog();
        } catch (e) {
            console.log('error reading data');
        }
    };

    render() {
        const {classes, showDialog} = this.props;
        return (
                <AppDialog
                    open={showDialog}
                    onClose={this.handleCloseDialog}
                    fullWidth
                    maxWidth="md"
                >

                    <DialogTitle>Import tracker data</DialogTitle>
                    <DialogContent>
                        <Dropzone
                            noClick={true}
                            onDrop={this.onDrop}
                            multiple={false}
                        >
                            {({getRootProps, getInputProps, isDragActive}) => (
                                <div {...getRootProps({
                                    className: classes.dragContainer
                                })}>
                                    <TextField
                                        placeholder="Copy your import data here, or drag a tracker file to import it."
                                        fullWidth
                                        multiline
                                        rows="4"
                                        value={this.props.importTextData}
                                        onChange={this.handleContentDataChange}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                    {isDragActive && (
                                        <Paper elevation={0} className={classes.dragActiveWrapper}>
                                            <Grid container direction="column" alignItems="center" justify="center"
                                                  className={classes.dragActive}>
                                                <Grid item>
                                                    <Typography variant="h4">
                                                        Drop your file here
                                                    </Typography>
                                                </Grid>
                                            </Grid>

                                        </Paper>
                                    )}

                                </div>
                            )}
                        </Dropzone>
                    </DialogContent>
                    <AppDialogActions>
                        <Button variant="contained" className={classes.button} onClick={this.handleContentDataLoad} color="primary" autoFocus>
                            <CloudUploadIcon className={classes.leftIcon}/>
                            Import
                        </Button>
                        <Button variant="outlined" className={classes.button} onClick={this.handleCloseDialog}>
                            Close
                        </Button>
                    </AppDialogActions>
                </AppDialog>
        );
    }
}

export default connect(
    state => ({
        showDialog: state.importExport.showImportDialog,
        importTextData: state.importExport.importTextData,
    }),
    dispatch => ({
        toggleImportDialog: (payload) => (dispatch(toggleImportDialog(payload))),
        importUpdateTextData: (payload) => (dispatch(importUpdateTextData(payload))),
        importData: (payload) => (dispatch(importData(payload))),
    }),
)(withStyles(styles)(ImportDialog));
