import React from 'react';
import {connect} from 'react-redux';

import {filterHideouts, getUnlockedHideoutData} from 'components/pages/Hideout/shared/functions';
import EmptyResults from 'components/shared/EmptyResults';
import ListContainer from 'components/pages/Hideout/List/ListContainer';
import Page from 'components/layout/Page';

class HideoutPage extends React.Component {

    render() {
        const {searchText, filters, unlockedHideouts} = this.props;
        const data = getUnlockedHideoutData(unlockedHideouts);
        const filteredData = filterHideouts(data, filters, searchText);
        return (
            <Page>
                <ListContainer items={filteredData}/>
                {filteredData.length === 0 && <EmptyResults/>}
            </Page>
        );
    }
}

export default connect(
    state => ({
        unlockedHideouts: state.hideout.unlocked,
        searchText: state.hideout.searchText,
        filters: state.hideout.filters,
    }),
)(HideoutPage);