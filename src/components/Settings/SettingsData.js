import React from 'react';
import {List, ListItem, ListItemIcon, ListItemText, Paper, Typography, withStyles} from '@material-ui/core';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import {connect} from 'react-redux';
import {resetAll} from 'store/main/actions';
import {incursionResetCompletedData, incursionResetInProgressData} from 'store/incursion/actions';
import {hideoutResetData} from 'store/hideout/actions';
import {compose} from 'redux';
import {withSnackbar} from 'notistack';
import Divider from '@material-ui/core/Divider';
import {displaySnackbar} from 'utils/snackbar';

const styles = theme => ({
    root: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    listItem: {
        '&:hover': {
            backgroundColor: 'inherit',
        }
    },
});

class SettingsData extends React.Component {

    displaySnackbar = () => displaySnackbar(this.props.enqueueSnackbar);

    handleResetHideouts = () => {
        this.props.hideoutResetData();
        this.displaySnackbar('Hideouts data reset');
    };

    handleResetInProgressIncursions = () => {
        this.props.incursionResetInProgressData();
        this.displaySnackbar('In-progress incursions data reset');
    };

    handleResetCompletedIncursions = () => {
        this.props.incursionResetCompletedData();
        this.displaySnackbar('Completed incursions data reset');
    };

    handleResetAll = () => {
        this.props.resetAll();
        this.displaySnackbar('All tracker data reset');
    };

    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <Typography variant="h6">Reset data</Typography>
                <Paper className={classes.root} elevation={2}>
                    <List disablePadding>
                        <ListItem button disableRipple className={classes.listItem} onClick={this.handleResetHideouts}>
                            <ListItemIcon>
                                <SettingsBackupRestoreIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Reset hideouts"
                                          secondary="Reset hideouts data only"
                            />
                        </ListItem>
                        <Divider/>
                        <ListItem button disableRipple className={classes.listItem} onClick={this.handleResetInProgressIncursions}>
                            <ListItemIcon>
                                <SettingsBackupRestoreIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Reset in-progress incursions"
                                          secondary="Reset in-progress incursions data only"
                            />
                        </ListItem>
                        <Divider/>
                        <ListItem button disableRipple className={classes.listItem} onClick={this.handleResetCompletedIncursions}>
                            <ListItemIcon>
                                <SettingsBackupRestoreIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Reset completed incursions"
                                          secondary="Reset completed incursions data only"
                            />
                        </ListItem>
                        <Divider/>
                        <ListItem button disableRipple className={classes.listItem} onClick={this.handleResetAll}>
                            <ListItemIcon>
                                <SettingsBackupRestoreIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Reset all"
                                          secondary="Reset all tracker data"
                            />
                        </ListItem>
                    </List>
                </Paper>
            </React.Fragment>
        );
    }
}

export default compose(
    connect(
        null,
        dispatch => ({
            incursionResetCompletedData: () => (dispatch(incursionResetCompletedData())),
            incursionResetInProgressData: () => (dispatch(incursionResetInProgressData())),
            hideoutResetData: () => (dispatch(hideoutResetData())),
            resetAll: () => (dispatch(resetAll())),
        }),
    ),
    withStyles(styles),
    withSnackbar,
)(SettingsData);