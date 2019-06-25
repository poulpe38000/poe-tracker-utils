import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withSnackbar} from 'notistack';

import {rootActions} from 'store/root/actions';
import {incursionActions} from 'store/incursion/actions';
import {hideoutActions} from 'store/hideout/actions';
import {displaySnackbar} from 'utils/snackbar';
import SettingsDataItem from 'components/Settings/Data/SettingsDataItem';
import SettingsListContainer from 'components/Settings/List/SettingsListContainer';

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
        return (
            <SettingsListContainer title={'Reset data'}>
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
            </SettingsListContainer>
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
            resetAll: rootActions.resetAll,
        },
    ),
    withSnackbar,
)(SettingsData);