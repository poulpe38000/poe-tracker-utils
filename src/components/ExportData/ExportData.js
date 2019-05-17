import React from 'react';
import {Button, withStyles} from '@material-ui/core';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import {connect} from 'react-redux';
import {toggleExportDialog} from 'store/import-export/actions';

const styles = theme => ({
    button: {margin: theme.spacing.unit},
    leftIcon: {marginRight: theme.spacing.unit},
});

class ExportData extends React.Component {
    handleOpenDialog = () => {
        this.props.toggleExportDialog(true);
    };

    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <Button variant="contained" className={classes.button} color="secondary" onClick={this.handleOpenDialog}>
                    <CloudDownloadIcon className={classes.leftIcon}/>
                    Export
                </Button>
            </React.Fragment>
        );
    }
}

export default connect(
    null,
    dispatch => ({
        toggleExportDialog: (payload) => (dispatch(toggleExportDialog(payload))),
    }),
)(withStyles(styles)(ExportData));
