import React from 'react';
import {Button, withStyles} from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {connect} from 'react-redux';
import {toggleImportDialog} from 'store/main/actions';
import {buttonStyles} from 'utils/themes';

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
            </React.Fragment>
        );
    }
}

export default connect(
    null,
    dispatch => ({
        toggleImportDialog: (payload) => (dispatch(toggleImportDialog(payload))),
    }),
)(withStyles(buttonStyles)(ImportData));
