import React from 'react'
import {connect} from "react-redux";
import {
    Button,
    createMuiTheme,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    MuiThemeProvider,
    TextField,
    withStyles
} from '@material-ui/core';
import {indigo, pink} from '@material-ui/core/colors';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import {toggleExportDialog} from 'store/import-export/actions';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const dialogTheme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: pink,
        type: 'light'
    },
    typography: {
        useNextVariants: true,
    },
});

const styles = theme => ({
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
});

class ExportDialog extends React.Component {
    handleCloseDialog = () => {
        console.log('closing dialog');
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
        this.props.toggleExportDialog(false);
    };

    render() {
        const exportText = JSON.stringify(this.props.exportData, null, 2);
        const {classes} = this.props;
        return (
            <MuiThemeProvider theme={dialogTheme}>
                <Dialog
                    open={this.props.showDialog}
                    onClose={this.handleCloseDialog}
                    fullWidth
                    maxWidth="md"
                >

                    <DialogTitle>Export tracker data</DialogTitle>
                    <DialogContent>
                        <TextField
                            fullWidth
                            multiline
                            rows="4"
                            value={exportText}
                            margin="normal"
                            variant="outlined"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <CopyToClipboard text={exportText}>
                            <Button>
                                Copy data
                            </Button>
                        </CopyToClipboard>
                        <Button variant="contained" elevation={0} size="large" color="primary" autoFocus
                                onClick={this.downloadTrackerFile}>
                            Download file
                            <CloudDownloadIcon className={classes.rightIcon}/>
                        </Button>
                        <Button onClick={this.handleCloseDialog}>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </MuiThemeProvider>
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
