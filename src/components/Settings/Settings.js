import React from 'react'
import {IconButton, withStyles} from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import {connect} from 'react-redux';
import {toggleSettingsDialog} from 'store/main/actions';

const styles = theme => ({
    button: {margin: theme.spacing.unit},
});

class Settings extends React.Component {
    handleOpenDialog = () => {
        this.props.toggleSettingsDialog(true);
    };

    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <IconButton
                    className={classes.button}
                    aria-haspopup="true"
                    onClick={this.handleOpenDialog}
                >
                    <SettingsIcon/>
                </IconButton>
            </React.Fragment>
        );
    }
}

export default connect(
    null,
    dispatch => ({
        toggleSettingsDialog: (payload) => (dispatch(toggleSettingsDialog(payload))),
    }),
)(withStyles(styles)(Settings));
