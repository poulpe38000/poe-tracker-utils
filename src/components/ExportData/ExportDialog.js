import React from 'react'
import {connect} from "react-redux";
import {Button, Fade, FormHelperText, TextField, withStyles} from '@material-ui/core';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import {toggleExportDialog} from 'store/main/actions';
import {AppDialog, AppDialogActions, AppDialogContent} from 'components/shared';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {buttonStyles, mergeStyles} from 'utils/themes';
import {compose} from 'redux';
import ExportSettings from 'components/ExportData/ExportSettings';
import cloneDeep from 'lodash/cloneDeep';

const styles = theme => (mergeStyles({
    inputExportIndicator: {
        color: theme.palette.success.main,
        textAlign: 'center',
    }
}, buttonStyles(theme)));

class ExportDialog extends React.Component {
    state = {
        copySuccess: false,
        includeHideouts: true,
        includeInProgressIncursions: true,
        includeCompletedIncursions: true,
    };
    timer;

    handleToggleSettings = (value) => {
        this.setState({
            ...this.state,
            [value]: !this.state[value]
        });
    };

    handleResetState = () => {
        this.setState({
            copySuccess: false,
            includeHideouts: true,
            includeInProgressIncursions: true,
            includeCompletedIncursions: true,
        });
    };

    handleCloseDialog = () => this.props.toggleExportDialog(false);

    getExportText = () => {
        const {includeHideouts, includeInProgressIncursions, includeCompletedIncursions} = this.state;
        const exportValue = cloneDeep(this.props.exportData);
        if (!includeHideouts) {
            delete exportValue.hideout;
        }
        if (!includeInProgressIncursions) {
            delete exportValue.incursion.in_progress;
        }
        if (!includeCompletedIncursions) {
            delete exportValue.incursion.completed;
        }
        if (!includeInProgressIncursions && !includeCompletedIncursions) {
            delete exportValue.incursion;
        }
        return JSON.stringify(exportValue, null, 2);
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
        const exportText = this.getExportText();
        const element = document.createElement("a");
        const file = new Blob([exportText], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "default.poetracker";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    };

    render() {
        const {classes, showDialog} = this.props;
        const {copySuccess, includeHideouts, includeInProgressIncursions, includeCompletedIncursions} = this.state;
        const canExportData = includeHideouts || includeInProgressIncursions || includeCompletedIncursions;
        const exportText = this.getExportText();
        return (
            <AppDialog
                open={showDialog}
                onEntering={this.handleResetState}
                onClose={this.handleCloseDialog}
                fullWidth
                maxWidth="md"
                titleText="Export tracker data"
            >
                <AppDialogContent>
                    <TextField
                        fullWidth
                        multiline
                        rows="8"
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
                    <ExportSettings
                        opts={{includeHideouts, includeInProgressIncursions, includeCompletedIncursions}}
                        onClick={this.handleToggleSettings}/>
                </AppDialogContent>
                <AppDialogActions>
                    <Button variant="contained" color="secondary" autoFocus className={classes.button}
                            onClick={this.downloadTrackerFile} disabled={!canExportData}>
                        <CloudDownloadIcon className={classes.leftIcon}/>
                        Download file
                    </Button>
                    <CopyToClipboard text={exportText} className={classes.button} onCopy={this.handleCopySuccess}>
                        <Button variant="contained" color="secondary" disabled={!canExportData}>
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

export default compose(
    connect(
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
    ),
    withStyles(styles)
)(ExportDialog);
