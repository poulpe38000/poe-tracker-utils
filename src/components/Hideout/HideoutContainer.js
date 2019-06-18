import React from 'react';
import {connect} from 'react-redux';
import EmptyResults from 'components/shared/EmptyResults';
import {filterHideouts, getUnlockedHideoutData} from 'components/Hideout/shared/functions';
import ListContainer from 'components/Hideout/List/ListContainer';

class HideoutContainer extends React.Component {

    render() {
        const {searchText, filters, unlockedHideouts} = this.props;
        const data = getUnlockedHideoutData(unlockedHideouts);
        const filteredData = filterHideouts(data, filters, searchText);
        return (
            <React.Fragment>
                <ListContainer items={filteredData}/>
                {filteredData.length === 0 && <EmptyResults/>}
            </React.Fragment>
        );
    }
}

export default connect(
    state => ({
        unlockedHideouts: state.hideout.unlocked,
        searchText: state.hideout.searchText,
        filters: state.hideout.filters,
    }),
)(HideoutContainer);