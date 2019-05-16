import React from 'react'
import {connect} from "react-redux";
import {DialogTitle} from '@material-ui/core';
import {toggleImportDialog} from 'store/import-export/actions';
import ImportDialogContent from 'components/import/ImportDialogContent/ImportDialogContent';
import AppDialog from 'components/AppDialog/AppDialog';

class ImportDialog extends React.Component {
    handleCloseDialog = () => {
        this.props.toggleImportDialog(false);
    };

    render() {
        const {showDialog} = this.props;
        return (
                <AppDialog
                    open={showDialog}
                    onClose={this.handleCloseDialog}
                    fullWidth
                    maxWidth="md"
                >

                    <DialogTitle>Import tracker data</DialogTitle>
                    <ImportDialogContent/>
                </AppDialog>
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
