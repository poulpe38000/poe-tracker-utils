import React from 'react'
import {connect} from "react-redux";
import {
    Button,
    DialogActions,
    DialogContent,
    DialogTitle,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    withStyles
} from '@material-ui/core';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import {resetAll, toggleSettingsDialog} from 'store/main/actions';
import {incursionResetCompletedData, incursionResetInProgressData} from 'store/incursion/actions';
import {hideoutResetData} from 'store/hideout/actions';
import {AppDialog} from 'components/shared';

const styles = theme => ({
    button: {margin: theme.spacing.unit},
});

class SettingsDialog extends React.Component {
    handleCloseDialog = () => {
        this.props.toggleSettingsDialog(false);
    };

    handleResetHideouts = () => {
        this.props.hideoutResetData();
    };

    handleResetInProgressIncursions = () => {
        this.props.incursionResetInProgressData();
    };

    handleResetCompletedIncursions = () => {
        this.props.incursionResetCompletedData();
    };

    handleResetAll = () => {
        this.props.resetAll();
    };

    render() {
        const {classes, showSettingsDialog} = this.props;
        return (
                <AppDialog
                    open={showSettingsDialog}
                    onClose={this.handleCloseDialog}
                    fullWidth
                    maxWidth="sm"
                >
                    <DialogTitle>Settings</DialogTitle>
                    <DialogContent>
                        <List
                            subheader={<ListSubheader component="div">Reset data</ListSubheader>}
                            className={classes.root}
                        >
                            <ListItem button onClick={this.handleResetHideouts}>
                                <ListItemIcon>
                                    <SettingsBackupRestoreIcon />
                                </ListItemIcon>
                                <ListItemText inset
                                              primary="Reset hideouts"
                                              secondary="Reset only hideouts unlocked data"
                                />
                            </ListItem>
                            <ListItem button onClick={this.handleResetInProgressIncursions}>
                                <ListItemIcon>
                                    <SettingsBackupRestoreIcon />
                                </ListItemIcon>
                                <ListItemText inset
                                              primary="Reset in-progress incursions"
                                              secondary="Reset only in-progress incursions data"
                                />
                            </ListItem>
                            <ListItem button onClick={this.handleResetCompletedIncursions}>
                                <ListItemIcon>
                                    <SettingsBackupRestoreIcon />
                                </ListItemIcon>
                                <ListItemText inset
                                              primary="Reset completed incursions"
                                              secondary="Reset only completed incursions data"
                                />
                            </ListItem>
                            <ListItem button onClick={this.handleResetAll}>
                                <ListItemIcon>
                                    <SettingsBackupRestoreIcon />
                                </ListItemIcon>
                                <ListItemText inset
                                              primary="Reset all"
                                              secondary="Reset all data"
                                />
                            </ListItem>
                        </List>
                    </DialogContent>
                    <DialogActions>
                        <Button className={classes.button} onClick={this.handleCloseDialog}>
                            Close
                        </Button>
                    </DialogActions>
                </AppDialog>
        );
    }
}

export default connect(
    state => ({
        showSettingsDialog: state.main.showSettingsDialog,
    }),
    dispatch => ({
        toggleSettingsDialog: (payload) => (dispatch(toggleSettingsDialog(payload))),
        incursionResetCompletedData: () => (dispatch(incursionResetCompletedData())),
        incursionResetInProgressData: () => (dispatch(incursionResetInProgressData())),
        hideoutResetData: () => (dispatch(hideoutResetData())),
        resetAll: () => (dispatch(resetAll())),
    }),
)(withStyles(styles)(SettingsDialog));
