import React from 'react'
import {connect} from "react-redux";
import {createMuiTheme, Dialog, DialogTitle, MuiThemeProvider} from '@material-ui/core';
import {indigo, pink} from '@material-ui/core/colors';
import {toggleExportDialog} from 'store/import-export/actions';
import ExportDialogContent from 'components/export/ExportDialogContent/ExportDialogContent';

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

class ExportDialog extends React.Component {
    handleCloseDialog = () => {
        this.props.toggleExportDialog(false);
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

                    <DialogTitle>Export tracker data</DialogTitle>
                    <ExportDialogContent/>
                </Dialog>
            </MuiThemeProvider>
        );
    }
}

export default connect(
    state => ({
        showDialog: state.importExport.showExportDialog,
    }),
    dispatch => ({
        toggleExportDialog: (payload) => (dispatch(toggleExportDialog(payload))),
    }),
)(ExportDialog);
