import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withSnackbar} from 'notistack';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import {resetAll} from 'store/main/actions';
import {incursionActions} from 'store/incursion/actions';
import {hideoutActions} from 'store/hideout/actions';
import {displaySnackbar} from 'utils/snackbar';
import {rootStyles} from 'components/Settings/shared';
import SettingsDataItem from 'components/Settings/SettingsDataItem';

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
        {
            incursionResetCompletedData: incursionActions.resetCompletedData,
            incursionResetInProgressData: incursionActions.resetInProgressData,
            hideoutResetData: hideoutActions.resetData,
            resetAll: resetAll,
        },
    ),
    withStyles(rootStyles),
    withSnackbar,
)(SettingsData);