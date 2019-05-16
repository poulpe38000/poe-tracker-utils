import React from 'react';
import {Typography, withStyles} from '@material-ui/core';
import IncursionBaseRooms from 'components/incursion/IncursionBaseRooms/IncursionBaseRooms';
import IncursionTieredRooms from 'components/incursion/IncursionTieredRooms/IncursionTieredRooms';

const styles = theme => ({
    pageTitle: {textAlign: 'center'},
});

function IncursionPage(props) {
    const {classes} = props;
    return (
        <React.Fragment>
            <Typography variant="h3" className={classes.pageTitle}>Incursion room completion tracker</Typography>
            <IncursionBaseRooms/>
            <IncursionTieredRooms/>
        </React.Fragment>
    );
}

export default withStyles(styles)(IncursionPage);
