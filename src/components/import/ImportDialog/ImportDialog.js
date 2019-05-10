import React from 'react'
import {connect} from "react-redux";
import {importData} from 'store/actions';
import {Button, createMuiTheme, Dialog, DialogActions, DialogTitle, MuiThemeProvider} from '@material-ui/core';
import {indigo, pink} from '@material-ui/core/colors';
import ImportDialogDropzone from 'components/import/ImportDialogDropzone/ImportDialogDropZone';
import {toggleImportDialog} from 'store/import-export/actions';

const dialogTheme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: pink,
        type: 'light'
    },
    typography: {
        useNextVariants: true,
    }
});

class ImportDialog extends React.Component {
    handleContentDataLoad = (event) => {
        try {
            this.props.importData(JSON.parse(this.props.importTextData));
            this.props.toggleImportDialog(false);
        } catch (e) {
            console.log('error reading data');
        }
    };

    handleCloseDialog = () => {
        console.log('closing dialog');
        this.props.toggleImportDialog(false);
    };

    render() {
        return (
            <MuiThemeProvider theme={dialogTheme}>
                <Dialog
                    open={this.props.showDialog}
                    onClose={this.handleCloseDialog}
                    fullWidth
                    maxWidth="md"
                >

                    <DialogTitle>Import tracker data</DialogTitle>
                    <ImportDialogDropzone/>
                    <DialogActions>
                        <Button onClick={this.handleContentDataLoad} color="primary" autoFocus>
                            Import
                        </Button>
                        <Button onClick={this.handleCloseDialog}>
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </MuiThemeProvider>
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
        importData: (payload) => (dispatch(importData(payload))),
    }),
)(ImportDialog);
