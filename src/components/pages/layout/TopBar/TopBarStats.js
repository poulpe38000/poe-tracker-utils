import React from 'react';
import {compose} from 'redux';
import {withStyles, withWidth} from '@material-ui/core';
import {isWidthUp} from '@material-ui/core/withWidth';
import HideoutStats from 'components/Hideout/HideoutStats/HideoutStats';
import IncursionStats from 'components/Incursion/IncursionStats/IncursionStats';

const styles = {
    stat: {
        textAlign: 'right',
    },
};

function TopBarStats({classes, width}) {
    return (
        <React.Fragment>
            {isWidthUp('xs', width, false) && (
                <div>
                    <div className={classes.stat}>
                        <HideoutStats/>
                    </div>
                    <div className={classes.stat}>
                        <IncursionStats/>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}

export default compose(
    withStyles(styles),
    withWidth()
)(TopBarStats);
