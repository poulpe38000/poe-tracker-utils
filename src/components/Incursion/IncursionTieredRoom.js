import React from 'react';
import PropTypes from 'prop-types';
import {IncursionRoom} from 'components/Incursion';

class IncursionTieredRoom extends React.Component {
    static propTypes = {
        roomKey: PropTypes.string.isRequired,
        rooms: PropTypes.array.isRequired,
    };

    render() {
        const {roomKey} = this.props;
        return (
            <React.Fragment>
                {this.props.rooms.map((room) => (<IncursionRoom key={room.id} roomKey={roomKey} room={room}/>))}
            </React.Fragment>
        );
    }
}

export default IncursionTieredRoom;
