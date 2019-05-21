import React from 'react'
import {connect} from "react-redux";
import {Button, DialogContent, Fade, FormHelperText, TextField, withStyles} from '@material-ui/core';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import {toggleExportDialog} from 'store/main/actions';
import {AppDialog, AppDialogActions} from 'components/shared';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {buttonStyles, mergeStyles} from 'utils/themes';

const styles = theme => (mergeStyles({
    inputExportIndicator: {
        color: theme.palette.success.main,
        textAlign: 'center',
    }
}, buttonStyles(theme)));

class ExportDialog extends React.Component {
    state = {
        copySuccess: false,
    };
    timer;

    handleResetState = () => {
        this.setState({
            copySuccess: false,
        });
    };

    handleCloseDialog = () => {
        this.props.toggleExportDialog(false);
    };

    handleCopySuccess = () => {
        this.setState({
            copySuccess: true,
        });
        if (!!this.timer) {
            clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
            this.setState({copySuccess: false});
        }, 3000);
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
        const {copySuccess} = this.state;
        const exportText = JSON.stringify(exportData, null, 2);
        return (
            <AppDialog
                open={showDialog}
                onEntering={this.handleResetState}
                onClose={this.handleCloseDialog}
                fullWidth
                maxWidth="md"
                titleText="Export tracker data"
            >
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
                    <FormHelperText className={classes.inputExportIndicator}>
                        <Fade in={copySuccess}>
                            <span>Tracker data copied to clipboard !</span>
                        </Fade>
                    </FormHelperText>
                </DialogContent>
                <AppDialogActions>
                    <Button variant="contained" color="secondary" autoFocus className={classes.button}
                            onClick={this.downloadTrackerFile}>
                        <CloudDownloadIcon className={classes.leftIcon}/>
                        Download file
                    </Button>
                    <CopyToClipboard text={exportText} className={classes.button} onCopy={this.handleCopySuccess}>
                        <Button variant="contained" color="secondary">
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
        showDialog: state.main.showExportDialog,
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
