import React from 'react';
import {IncursionBaseRooms, IncursionSummary, IncursionTieredRooms} from 'components/Incursion';

class IncursionTable extends React.Component {

    render() {
        return (
            <React.Fragment>
                <IncursionSummary/>
                <IncursionBaseRooms/>
                <IncursionTieredRooms/>
            </React.Fragment>
        );
    }
}

export default IncursionTable;