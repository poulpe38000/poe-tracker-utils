import React from 'react';
import {List, Paper, Typography, withStyles} from '@material-ui/core';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withSnackbar} from 'notistack';

import {resetAll} from 'store/main/actions';
import {incursionResetCompletedData, incursionResetInProgressData} from 'store/incursion/actions';
import {hideoutResetData} from 'store/hideout/actions';
import {displaySnackbar} from 'utils/snackbar';
import {SettingsDataItem} from 'components/Settings/index';
import {rootStyles} from 'components/Settings/shared';

class SettingsData extends React.Component {

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
    withStyles(rootStyles),
    withSnackbar,
)(SettingsData);