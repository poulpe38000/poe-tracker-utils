import React from 'react';
import {connect} from 'react-redux';

import {filteredIncursionData, getBaseRooms, getTieredRooms} from 'utils/incursion';
import IncursionBaseList from 'components/Incursion/IncursionBaseList';
import IncursionTieredList from 'components/Incursion/IncursionTieredList';
import EmptyResults from 'components/shared/EmptyResults';

class IncursionList extends React.Component {
    constructor(props) {
        super(props);
        this.baseRoomsList = getBaseRooms();
        this.tieredRoomsList = getTieredRooms();
    }

    render() {
        const {searchText} = this.props;
        const baseData = filteredIncursionData(this.baseRoomsList, searchText);
        const tieredData = filteredIncursionData(this.tieredRoomsList, searchText);
        return (
            <React.Fragment>
                <IncursionBaseList items={baseData}/>
                <IncursionTieredList items={tieredData}/>
                {(Object.keys(baseData).length === 0 && Object.keys(tieredData).length === 0) && <EmptyResults/>}
            </React.Fragment>
        );
    }
}

export default connect(
    state => ({
        searchText: state.incursion.searchText,
    }),
)(IncursionList);
