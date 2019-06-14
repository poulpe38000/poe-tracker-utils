import React from 'react';
import * as PropTypes from 'prop-types';

import IncursionListContainer from 'components/Incursion/IncursionListContainer';
import IncursionRoom from 'components/Incursion/IncursionRoom';

class IncursionBaseList extends React.Component {
    static propTypes = {
        items: PropTypes.object.isRequired,
    };

    render() {
        const {items} = this.props;
        const roomsKeys = Object.keys(items);
        return (
            <React.Fragment>
                {roomsKeys.length > 0 && (
                    <IncursionListContainer title={'Non-upgradeable rooms'}>
                        {roomsKeys
                            .map((roomsKey) => (
                                    <React.Fragment key={roomsKey}>
                                        {items[roomsKey].map((room) => (
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

export default IncursionBaseList;
