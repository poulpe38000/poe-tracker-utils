import React from 'react';
import {
    createStyles,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    StyledComponentProps,
    Theme,
    Typography,
    withStyles
} from '@material-ui/core';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import {connect} from 'react-redux';
import {resetAll} from 'store/main/actions';
import {incursionResetCompletedData, incursionResetInProgressData} from 'store/incursion/actions';
import {hideoutResetData} from 'store/hideout/actions';
import {withSnackbar, WithSnackbarProps} from 'notistack';
import Divider from '@material-ui/core/Divider';
import {displaySnackbar} from 'utils/snackbar';
import {Dispatch} from 'redux';

interface Props extends StyledComponentProps, WithSnackbarProps {
    classes: any;
    incursionResetCompletedData: Function;
    incursionResetInProgressData: Function;
    hideoutResetData: Function;
    resetAll: Function;
}

const styles = ({spacing}: Theme) => createStyles({
    root: {
        marginTop: spacing(2),
        marginBottom: spacing(2),
    },
    listItem: {
        '&:hover': {
            backgroundColor: 'inherit',
        }
    },
});

class SettingsData extends React.Component<Props> {

    displaySnackbar = displaySnackbar(this.props.enqueueSnackbar);


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

export default connect(
        null,
        (dispatch: Dispatch) => ({
            incursionResetCompletedData: () => (dispatch(incursionResetCompletedData())),
            incursionResetInProgressData: () => (dispatch(incursionResetInProgressData())),
            hideoutResetData: () => (dispatch(hideoutResetData())),
            resetAll: () => (dispatch(resetAll())),
        }),
    )(withStyles(styles)(withSnackbar(SettingsData)));