import React from 'react'
import {connect} from "react-redux";
import {createMuiTheme, Dialog, DialogTitle, MuiThemeProvider} from '@material-ui/core';
import {indigo, pink} from '@material-ui/core/colors';
import {toggleImportDialog} from 'store/import-export/actions';
import ImportDialogContent from 'components/import/ImportDialogContent/ImportDialogContent';

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
    handleCloseDialog = () => {
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
                    <ImportDialogContent/>
                </Dialog>
            </MuiThemeProvider>
        );
    }
}

export default connect(
    state => ({
        showDialog: state.importExport.showImportDialog,
    }),
    dispatch => ({
        toggleImportDialog: (payload) => (dispatch(toggleImportDialog(payload))),
    }),
)(ImportDialog);
