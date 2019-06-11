import React from 'react';
import {createStyles, withStyles, withWidth} from '@material-ui/core';
import {isWidthUp} from '@material-ui/core/withWidth';
import HideoutStats from 'components/Hideout/HideoutStats/HideoutStats';
import IncursionStats from 'components/Incursion/IncursionStats/IncursionStats';
import {Breakpoint} from '@material-ui/core/styles/createBreakpoints';

interface Props {
    classes: any,
    width: Breakpoint
}
const styles = createStyles({
    stat: {
        textAlign: 'right',
    },
});

class TopBarStats extends React.Component<Props> {

    render() {
        const {classes, width} = this.props;
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
}

export default withStyles(styles)(withWidth()(TopBarStats));
