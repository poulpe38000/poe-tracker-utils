import React from 'react';
import Divider from '@material-ui/core/Divider';
import * as PropTypes from 'prop-types';

import IncursionRoom from 'components/Incursion/IncursionRoom';

class IncursionTieredGroup extends React.Component {
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
                {rooms.map((room) => <IncursionRoom key={room.id} roomKey={roomKey} room={room}/>)}
                {!noDivider && <Divider/>}
            </React.Fragment>
        );
    }
}

export default IncursionTieredGroup;
