import React from 'react';
import {List, ListItem, ListItemIcon, ListItemText, Paper, Typography, withStyles} from '@material-ui/core';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import {connect} from 'react-redux';
import {resetAll} from 'store/main/actions';
import {incursionResetCompletedData, incursionResetInProgressData} from 'store/incursion/actions';
import {hideoutResetData} from 'store/hideout/actions';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
    },
    list: {
        width: '100%',
        maxWidth: 360,
    },
});

class SettingsData extends React.Component {
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
        const {classes} = this.props;
        return (
            <React.Fragment>
                <Paper className={classes.root}>
                    <Typography variant="h4">Reset data</Typography>
                    <List className={classes.list}>
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
                </Paper>
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
)(withStyles(styles)(SettingsData));