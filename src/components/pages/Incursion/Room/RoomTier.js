import React from 'react';
import Divider from '@material-ui/core/Divider';
import * as PropTypes from 'prop-types';

import Room from 'components/pages/Incursion/Room/Room';

class RoomTier extends React.Component {
    static propTypes = {
        roomKey: PropTypes.string.isRequired,
        rooms: PropTypes.array.isRequired,
        noDivider: PropTypes.bool
    };
    static defaultProps = {
        noDivider: false,
    };

    render() {
        const {roomKey, rooms, noDivider} = this.props;
        return (
            <React.Fragment>
                {rooms.map((room) => <Room key={room.id} roomKey={roomKey} room={room}/>)}
                {!noDivider && <Divider/>}
            </React.Fragment>
        );
    }
}

export default RoomTier;
