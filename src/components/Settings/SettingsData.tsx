import React from 'react';
import {List, Paper, StyledComponentProps, Typography, withStyles} from '@material-ui/core';
import {connect} from 'react-redux';
import {rootActions} from 'store/actions';
import {incursionActions} from 'store/incursion/actions';
import {hideoutActions} from 'store/hideout/actions';
import {withSnackbar, WithSnackbarProps} from 'notistack';
import {displaySnackbar} from 'utils/snackbar';
import SettingsDataItem from './SettingsDataItem';
import {rootStyles} from './shared';

interface Props extends StyledComponentProps, WithSnackbarProps {
    classes: any;
    incursionResetCompletedData: Function;
    incursionResetInProgressData: Function;
    hideoutResetData: Function;
    resetAll: Function;
}

class SettingsData extends React.Component<Props> {

    displaySnackbar = displaySnackbar(this.props.enqueueSnackbar);

    handleResetHideouts = (): void => {
        this.props.hideoutResetData();
        this.displaySnackbar('Hideouts data reset');
    };

    handleResetInProgressIncursions = (): void => {
        this.props.incursionResetInProgressData();
        this.displaySnackbar('In-progress incursions data reset');
    };

    handleResetCompletedIncursions = (): void => {
        this.props.incursionResetCompletedData();
        this.displaySnackbar('Completed incursions data reset');
    };

    handleResetAll = (): void => {
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
                        <SettingsDataItem primaryText={'Reset hideouts'}
                                          secondaryText={'Reset hideouts data only'}
                                          onClick={this.handleResetHideouts}/>
                        <SettingsDataItem primaryText={'Reset in-progress incursions'}
                                          secondaryText={'Reset in-progress incursions data only'}
                                          onClick={this.handleResetInProgressIncursions}/>
                        <SettingsDataItem primaryText={'Reset completed incursions'}
                                          secondaryText={'Reset completed incursions data only'}
                                          onClick={this.handleResetCompletedIncursions}/>
                        <SettingsDataItem primaryText={'Reset all'}
                                          secondaryText={'Reset all tracker data'}
                                          onClick={this.handleResetAll}
                                          noDivider/>
                    </List>
                </Paper>
            </React.Fragment>
        );
    }
}

export default connect(
    null,
    {
        incursionResetCompletedData: incursionActions.resetCompletedData,
        incursionResetInProgressData: incursionActions.resetInProgressData,
        hideoutResetData: hideoutActions.resetData,
        resetAll: rootActions.resetAll,
    },
)(withStyles(rootStyles)(withSnackbar(SettingsData)));