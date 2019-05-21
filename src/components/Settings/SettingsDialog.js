import React from 'react'
import {connect} from "react-redux";
import {
    Button,
    DialogContent,
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
import {AppDialog, AppDialogActions} from 'components/shared';
import {buttonStyles} from 'utils/themes';

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
                    titleText="Settings"
                >
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
                    <AppDialogActions>
                        <Button variant="outlined" className={classes.button} onClick={this.handleCloseDialog}>
                            Close
                        </Button>
                    </AppDialogActions>
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
)(withStyles(buttonStyles)(SettingsDialog));
