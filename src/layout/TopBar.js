import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger/useScrollTrigger';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

import AppToolbar from 'layout/TopBarComponents/AppToolbar';

const styles = ({zIndex}) => ({
    root: {
        zIndex: zIndex.drawer + 1,
    },
});

function ElevationScroll(props) {
    const {children} = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.node.isRequired,
};

class TopBar extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <ElevationScroll {...this.props}>
                <AppBar position="fixed" className={classes.root}>
                    <AppToolbar/>
                </AppBar>
            </ElevationScroll>
        );
    }
}

export default withStyles(styles)(TopBar);
