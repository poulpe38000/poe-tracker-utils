import React from 'react'
import {connect} from "react-redux";
import {importData} from 'store/main/actions';
import {DialogContent, TextField, Typography, withStyles} from '@material-ui/core';
import Dropzone from 'react-dropzone';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {importUpdateTextData, toggleImportDialog} from 'store/import-export/actions';

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
});


class ImportDialogDropzone extends React.Component {

    onDrop = acceptedFiles => {
        const reader = new FileReader();
        reader.onload = () => {
            try {
                this.props.importData(JSON.parse(reader.result));
                this.props.toggleImportDialog(false);
            } catch (e) {
                console.log('error reading file');
            }
        };

        acceptedFiles.forEach(file => reader.readAsBinaryString(file));
    };

    handleContentDataChange = event => {
        this.props.importUpdateTextData(event.target.value);
    };

    render() {
        const {classes} = this.props;

        return (
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
        );
    }
}

export default connect(
    state => ({
        importTextData: state.importExport.importTextData,
    }),
    dispatch => ({
        toggleImportDialog: (payload) => (dispatch(toggleImportDialog(payload))),
        importUpdateTextData: (payload) => (dispatch(importUpdateTextData(payload))),
        importData: (payload) => (dispatch(importData(payload))),
    }),
)(withStyles(styles)(ImportDialogDropzone));
