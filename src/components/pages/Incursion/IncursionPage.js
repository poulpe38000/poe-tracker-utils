import React from 'react';
import {connect} from 'react-redux';

import {getBaseRooms, getTieredRooms} from 'utils/incursion';
import BaseList from 'components/pages/Incursion/List/BaseList';
import EmptyResults from 'components/shared/EmptyResults';
import TieredList from 'components/pages/Incursion/List/TieredList';
import Page from 'components/layout/Page';
import {filterIncursions} from 'components/pages/Incursion/shared/functions';

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
                <BaseList items={baseData}/>
                <TieredList items={tieredData}/>
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
