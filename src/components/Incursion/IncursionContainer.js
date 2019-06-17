import React from 'react';
import {connect} from 'react-redux';

import {getBaseRooms, getTieredRooms} from 'utils/incursion';
import IncursionAppBar from 'components/Incursion/IncursionAppBar';
import BaseList from 'components/Incursion/BaseList';
import TieredList from 'components/Incursion/TieredList';
import EmptyResults from 'components/shared/EmptyResults';
import {filterIncursions} from 'components/Incursion/functions';

class IncursionContainer extends React.Component {
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
            <React.Fragment>
                <IncursionAppBar/>
                <BaseList items={baseData}/>
                <TieredList items={tieredData}/>
                {!this.dataDisplayed(baseData, tieredData) && <EmptyResults/>}
            </React.Fragment>
        );
    }
}

export default connect(
    state => ({
        searchText: state.incursion.searchText,
    }),
)(IncursionContainer);
