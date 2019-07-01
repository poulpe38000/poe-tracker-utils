import React from 'react';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import withStyles from '@material-ui/core/styles/withStyles';

import HideoutStats from 'components/pages/Hideout/HideoutStats/HideoutStats';
import IncursionStats from 'components/pages/Incursion/IncursionStats/IncursionStats';

const styles = {
    item: {
        textAlign: 'right',
    },
};

function AppStats({classes}) {
    return (
        <Hidden xsDown>
            <Box>
                <Box className={classes.item}>
                    <HideoutStats/>
                </Box>
                <Box className={classes.item}>
                    <IncursionStats/>
                </Box>
            </Box>
        </Hidden>
    );
}

export default withStyles(styles)(AppStats);
