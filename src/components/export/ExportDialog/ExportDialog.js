import React from 'react'
import {connect} from "react-redux";
import {DialogTitle} from '@material-ui/core';
import {toggleExportDialog} from 'store/import-export/actions';
import ExportDialogContent from 'components/export/ExportDialogContent/ExportDialogContent';
import AppDialog from 'components/AppDialog/AppDialog';

class ExportDialog extends React.Component {
    handleCloseDialog = () => {
        this.props.toggleExportDialog(false);
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
                    <DialogTitle>Export tracker data</DialogTitle>
                    <ExportDialogContent/>
                </AppDialog>
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
