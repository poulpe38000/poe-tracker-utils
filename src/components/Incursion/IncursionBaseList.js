import React from 'react';
import {IncursionRoom, IncursionListContainer} from 'components/Incursion';
import {connect} from 'react-redux';
import {filteredIncursionData, getBaseRooms} from 'utils/incursion';

function acceptFilter(rooms) {
    return rooms.length === 1;
}

class IncursionBaseList extends React.Component {
    state = {
        roomsList: getBaseRooms(),
    };

    render() {
        const {searchText} = this.props;
        const {roomsList} = this.state;
        const data = filteredIncursionData(roomsList, acceptFilter, searchText);
        const roomsKeys = Object.keys(data);
        return (
            <React.Fragment>
                {roomsKeys.length > 0 && (
                    <IncursionListContainer title={'Non-upgradeable rooms'}>
                        {roomsKeys.map((roomsKey) => {
                            const rooms = data[roomsKey];
                            return (
                                <React.Fragment key={roomsKey}>
                                    {rooms.map((room) => (
                                        <IncursionRoom key={room.id} roomKey={roomsKey} room={room}/>))}
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
)(IncursionBaseList);
