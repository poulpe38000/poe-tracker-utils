import React from 'react'
import {connect} from "react-redux";
import {Button, DialogContent, DialogTitle, TextField, withStyles} from '@material-ui/core';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import {toggleExportDialog} from 'store/import-export/actions';
import {AppDialog, AppDialogActions} from 'components/shared';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const styles = theme => ({
    button: {margin: theme.spacing.unit},
    leftIcon: {marginRight: theme.spacing.unit},
    rightIcon: { marginLeft: theme.spacing.unit},
});

class ExportDialog extends React.Component {
    handleCloseDialog = () => {
        this.props.toggleExportDialog(false);
    };

    downloadTrackerFile = () => {
        const exportText = JSON.stringify(this.props.exportData, null, 2);
        const element = document.createElement("a");
        const file = new Blob([exportText], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "default.poetracker";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    };

    render() {
        const {classes, exportData, showDialog} = this.props;
        const exportText = JSON.stringify(exportData, null, 2);
        return (
                <AppDialog open={showDialog} onClose={this.handleCloseDialog} fullWidth maxWidth="md">
                    <DialogTitle>Export tracker data</DialogTitle>
                    <DialogContent>
                        <TextField
                            fullWidth
                            multiline
                            rows="4"
                            value={exportText}
                            margin="normal"
                            variant="outlined"
                            InputProps={{readOnly: true}}
                        />
                    </DialogContent>
                    <AppDialogActions>
                        <Button variant="contained" color="primary" autoFocus className={classes.button} onClick={this.downloadTrackerFile}>
                            <CloudDownloadIcon className={classes.leftIcon}/>
                            Download file
                        </Button>
                        <CopyToClipboard text={exportText}>
                            <Button variant="contained" color="default" className={classes.button}>
                                <FileCopyOutlinedIcon className={classes.leftIcon}/>
                                Copy data
                            </Button>
                        </CopyToClipboard>
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
        showDialog: state.importExport.showExportDialog,
        exportData: {
            hideout: {
                unlocked: state.hideout.unlocked,
            },
            incursion: {
                completed: state.incursion.completed,
                in_progress: state.incursion.in_progress,
            },
        },
    }),
    dispatch => ({
        toggleExportDialog: (payload) => (dispatch(toggleExportDialog(payload))),
    }),
)(withStyles(styles)(ExportDialog));
