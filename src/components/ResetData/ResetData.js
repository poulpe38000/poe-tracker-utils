import React from 'react'
import {connect} from "react-redux";
import {Button, Menu, MenuItem, withStyles} from '@material-ui/core';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import {incursionResetCompletedData, incursionResetInProgressData} from 'store/incursion/actions';
import {hideoutResetData} from 'store/hideout/actions';
import {resetAll} from 'store/main/actions';

const styles = theme => ({
    button: {margin: theme.spacing.unit},
    leftIcon: {marginRight: theme.spacing.unit},
});

class ResetData extends React.Component {
    state = {
        anchorEl: null,
    };

    handleOpenMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleResetHideouts = () => {
        this.props.hideoutResetData();
        this.closeMenu();
    };

    handleResetInProgressIncursions = () => {
        this.props.incursionResetInProgressData();
        this.closeMenu();
    };

    handleResetCompletedIncursions = () => {
        this.props.incursionResetCompletedData();
        this.closeMenu();
    };

    handleResetAll = () => {
        this.props.resetAll();
        this.closeMenu();
    };

    closeMenu = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;
        const {classes} = this.props;
        return (
            <React.Fragment>
                <Button
                    className={classes.button}
                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleOpenMenu}
                >
                    <SettingsBackupRestoreIcon className={classes.leftIcon}/>
                    Reset data
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleCloseMenu}
                >
                    <MenuItem onClick={this.handleResetHideouts}>Reset hideouts</MenuItem>
                    <MenuItem onClick={this.handleResetInProgressIncursions}>Reset in progress incursions</MenuItem>
                    <MenuItem onClick={this.handleResetCompletedIncursions}>Reset completed incursions</MenuItem>
                    <MenuItem onClick={this.handleResetAll}>Reset all</MenuItem>
                </Menu>
            </React.Fragment>
        );
    }
}

export default connect(
    null,
    dispatch => ({
        incursionResetCompletedData: () => (dispatch(incursionResetCompletedData())),
        incursionResetInProgressData: () => (dispatch(incursionResetInProgressData())),
        hideoutResetData: () => (dispatch(hideoutResetData())),
        resetAll: () => (dispatch(resetAll())),
    }),
)(withStyles(styles)(ResetData));
