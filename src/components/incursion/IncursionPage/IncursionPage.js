import React from 'react';
import {Typography} from '@material-ui/core';
import IncursionBaseRooms from 'components/incursion/IncursionBaseRooms/IncursionBaseRooms';
import IncursionTieredRooms from 'components/incursion/IncursionTieredRooms/IncursionTieredRooms';


function IncursionPage() {
    return (
        <React.Fragment>
            <Typography variant="h3" style={{textAlign: 'center'}}>Incursion room completion tracker</Typography>
            <IncursionBaseRooms/>
            <IncursionTieredRooms/>
        </React.Fragment>
    );
}

export default IncursionPage;
