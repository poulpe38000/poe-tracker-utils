import React from 'react';
import INCURSION_CONSTANTS from 'constants/incursion';
import {IncursionTieredRoom} from 'components/Incursion';


class IncursionTieredRooms extends React.Component {
    render() {
        const upgradeableKeys = Object.keys(INCURSION_CONSTANTS.rooms.upgradeable);
        return (
            <React.Fragment>
                {
                    upgradeableKeys.map((idx) => (
                            <IncursionTieredRoom key={idx} rooms={INCURSION_CONSTANTS.rooms.upgradeable[idx]}/>
                        )
                    )
                }
            </React.Fragment>

        );
    }
}

export default IncursionTieredRooms;
