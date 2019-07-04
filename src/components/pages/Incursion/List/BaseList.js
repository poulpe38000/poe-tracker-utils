import React from 'react';
import * as PropTypes from 'prop-types';

import ListContainer from 'components/pages/Incursion/List/ListContainer';
import Room from 'components/pages/Incursion/List/Room/Room';

class BaseList extends React.Component {
    static propTypes = {
        items: PropTypes.object.isRequired,
    };

    render() {
        const {items} = this.props;
        const roomsKeys = Object.keys(items);
        return (
            <React.Fragment>
                {roomsKeys.length > 0 && (
                    <ListContainer title={'Non-upgradeable rooms'}>
                        {roomsKeys
                            .map((roomsKey) => (
                                    <React.Fragment key={roomsKey}>
                                        {items[roomsKey].map((room) => (
                                            <Room key={room.id} roomKey={roomsKey} room={room}/>))}
                                    </React.Fragment>
                                )
                            )
                        }
                    </ListContainer>
                )}
            </React.Fragment>
        );
    }
}

export default BaseList;
