import React from 'react';
import * as PropTypes from 'prop-types';

import RoomLabel from 'components/pages/Incursion/Room/Details/RoomLabel';
import RoomInfo from 'components/pages/Incursion/Room/Details/RoomInfo';
import ListDetailsContainer from 'components/shared/List/ListDetailsContainer';

class RoomDetails extends React.Component {
    static propTypes = {
        room: PropTypes.object.isRequired,
    };

    render() {
        const {room} = this.props;
        return (
            <ListDetailsContainer>
                <RoomLabel room={room}/>
                <RoomInfo infos={room.notable}/>
                <RoomInfo infos={room.mods}/>
            </ListDetailsContainer>
        );
    }
}

export default RoomDetails;
