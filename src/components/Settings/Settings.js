import React from 'react'
import {IconButton, withStyles} from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import {connect} from 'react-redux';
import {toggleSettingsDialog} from 'store/main/actions';
import {SettingsDialog} from 'components/Settings';

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
                <SettingsDialog/>
            </React.Fragment>
        );
    }
}

export default connect(
    state => ({
        showSettingsDialog: state.main.showSettingsDialog,
    }),
    dispatch => ({
        toggleSettingsDialog: (payload) => (dispatch(toggleSettingsDialog(payload))),
    }),
)(withStyles(styles)(Settings));
