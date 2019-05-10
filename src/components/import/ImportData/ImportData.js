import React from 'react';
import {Button, withStyles} from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ImportDialog from 'components/import/ImportDialog/ImportDialog';
import {connect} from 'react-redux';
import {toggleImportDialog} from 'store/import-export/actions';

const styles = theme => ({
    button: {margin: theme.spacing.unit},
    leftIcon: {marginRight: theme.spacing.unit},
});

class ImportData extends React.Component {
    handleOpenDialog = () => {
        this.props.toggleImportDialog(true);
    };

    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <Button className={classes.button} onClick={this.handleOpenDialog}>
                    <CloudUploadIcon className={classes.leftIcon}/>
                    Import
                </Button>
                <ImportDialog/>
            </React.Fragment>
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
)(withStyles(styles)(ImportData));
