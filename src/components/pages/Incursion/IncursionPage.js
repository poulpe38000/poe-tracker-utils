import React from 'react';
import {connect} from 'react-redux';

import {getBaseRooms, getTieredRooms} from 'utils/incursion';
import EmptyResults from 'components/shared/EmptyResults';
import Page from 'components/layout/Page';
import {filterIncursions} from 'components/pages/Incursion/shared/functions';
import ListContainer from 'components/pages/Incursion/List/ListContainer';
import RankContainer from 'components/pages/Incursion/Rank/RankContainer';

class IncursionPage extends React.Component {
    constructor(props) {
        super(props);
        this.baseRoomsList = getBaseRooms();
        this.tieredRoomsList = getTieredRooms();
    }

    dataDisplayed = (...lists) => {
        return lists.some(list => Object.keys(list).length > 0);
    };

    render() {
        const {searchText} = this.props;
        const baseData = filterIncursions(this.baseRoomsList, searchText);
        const tieredData = filterIncursions(this.tieredRoomsList, searchText);
        return (
            <Page>
                {/*<RankContainer/>*/}
                <ListContainer title={'Non-upgradeable rooms'} items={baseData} noDivider/>
                <ListContainer title={'Upgradeable rooms'} items={tieredData}/>
                {!this.dataDisplayed(baseData, tieredData) && <EmptyResults/>}
            </Page>
        );
    }
}

export default connect(
    state => ({
        searchText: state.incursion.searchText,
    }),
)(IncursionPage);
