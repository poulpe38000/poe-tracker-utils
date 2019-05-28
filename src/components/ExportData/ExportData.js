import React from 'react';
import {Button, withStyles} from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import {connect} from 'react-redux';
import {toggleExportDialog} from 'store/main/actions';
import {buttonStyles} from 'utils/themes';
import {compose} from 'redux';

class ExportData extends React.Component {
    handleOpenDialog = () => {
        this.props.toggleExportDialog(true);
    };

    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <Button variant="contained" className={classes.button} color="secondary"
                        onClick={this.handleOpenDialog}>
                    <GetAppIcon className={classes.leftIcon}/>
                    Export
                </Button>
            </React.Fragment>
        );
    }
}

export default compose(
    connect(
        null,
        dispatch => ({
            toggleExportDialog: (payload) => (dispatch(toggleExportDialog(payload))),
        }),
    ),
    withStyles(buttonStyles)
)(ExportData);
