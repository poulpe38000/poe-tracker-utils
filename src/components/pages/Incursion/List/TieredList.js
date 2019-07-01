import React from 'react';
import * as PropTypes from 'prop-types';

import ListContainer from 'components/pages/Incursion/List/ListContainer';
import RoomTier from 'components/pages/Incursion/Room/RoomTier';


class TieredList extends React.Component {
    static propTypes = {
        items: PropTypes.object.isRequired,
    };

    render() {
        const {items} = this.props;
        const roomsKeys = Object.keys(items);
        return (
            <React.Fragment>
                {roomsKeys.length > 0 && (
                    <ListContainer title={'Upgradeable rooms'}>
                        {roomsKeys
                            .map((roomsKey, idx) => (
                                    <React.Fragment key={roomsKey}>
                                        <RoomTier
                                            roomKey={roomsKey}
                                            rooms={items[roomsKey]}
                                            noDivider={idx === roomsKeys.length - 1}
                                        />
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

export default TieredList;
