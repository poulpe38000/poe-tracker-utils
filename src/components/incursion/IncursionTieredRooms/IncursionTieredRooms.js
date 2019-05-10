import React from 'react';
import INCURSION_CONSTANTS from 'constants/incursion';
import IncursionTieredRoom from 'components/incursion/IncursionTieredRoom/IncursionTieredRoom';


class IncursionTieredRooms extends React.Component {
    render() {
        return (
            <React.Fragment>
                {
                    INCURSION_CONSTANTS.rooms.upgradeable.map((rooms, idx) => (
                            <IncursionTieredRoom key={idx} rooms={rooms}/>
                        )
                    )
                }
            </React.Fragment>

        );
    }
}

export default IncursionTieredRooms;
