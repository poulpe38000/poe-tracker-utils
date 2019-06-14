import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import HideoutStats from 'components/Hideout/HideoutStats/HideoutStats';
import IncursionStats from 'components/Incursion/IncursionStats/IncursionStats';
import Box from '@material-ui/core/Box';

const styles = {
    item: {
        textAlign: 'right',
    },
};

function TopBarStats({classes}) {
    return (
        <Box>
            <Box className={classes.item}>
                <HideoutStats/>
            </Box>
            <Box className={classes.item}>
                <IncursionStats/>
            </Box>
        </Box>
    );
}

export default withStyles(styles)(TopBarStats);
