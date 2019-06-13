import React from 'react';
import {connect} from 'react-redux';

import {filteredIncursionData, getBaseRooms} from 'utils/incursion';
import IncursionListContainer from 'components/Incursion/IncursionListContainer';
import IncursionRoom from 'components/Incursion/IncursionRoom';

class IncursionBaseList extends React.Component {
    constructor(props) {
        super(props);
        this.roomsList = getBaseRooms();
    }

    render() {
        const {searchText} = this.props;
        const data = filteredIncursionData(this.roomsList, searchText);
        const roomsKeys = Object.keys(data);
        return (
            <React.Fragment>
                {roomsKeys.length > 0 && (
                    <IncursionListContainer title={'Non-upgradeable rooms'}>
                        {roomsKeys
                            .map((roomsKey) => (
                                    <React.Fragment key={roomsKey}>
                                        {data[roomsKey].map((room) => (
                                            <IncursionRoom key={room.id} roomKey={roomsKey} room={room}/>))}
                                    </React.Fragment>
                                )
                            )
                        }
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
