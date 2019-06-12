import React from 'react';
import {connect} from 'react-redux';
import Divider from '@material-ui/core/Divider';

import {filteredIncursionData, getTieredRooms} from 'utils/incursion';
import IncursionListContainer from 'components/Incursion/IncursionListContainer';
import IncursionTieredGroup from 'components/Incursion/IncursionTieredGroup';

function acceptFilter(rooms) {
    return rooms.length > 1;
}

class IncursionTieredList extends React.Component {
    state = {
        roomsList: getTieredRooms(),
    };

    render() {
        const {searchText} = this.props;
        const {roomsList} = this.state;
        const data = filteredIncursionData(roomsList, acceptFilter, searchText);
        const roomsKeys = Object.keys(data);
        return (
            <React.Fragment>
                {roomsKeys.length > 0 && (
                    <IncursionListContainer title={'Upgradeable rooms'}>
                        {roomsKeys.map((roomsKey, idx) => {
                            const rooms = data[roomsKey];
                            return (
                                <React.Fragment key={roomsKey}>
                                    <IncursionTieredGroup roomKey={roomsKey} rooms={rooms}/>
                                    {idx < roomsKeys.length - 1 && <Divider/>}
                                </React.Fragment>
                            );
                        })}
                    </IncursionListContainer>
                )}
            </React.Fragment>

        );
    }
}

export default connect(
    state => ({
        searchText: state.incursion.searchText,
    }),
)(IncursionTieredList);
