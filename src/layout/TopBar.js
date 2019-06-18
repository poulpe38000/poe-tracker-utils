import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger/useScrollTrigger';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

import AppToolbar from 'layout/TopBarComponents/AppToolbar';
import {compose} from 'redux';
import {matchPath, withRouter} from 'react-router-dom';
import ROUTES from 'constants/routes.constants';

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
    static propTypes = {
        toolbar: PropTypes.elementType,
        toolbarProps: PropTypes.object,
    };
    static defaultProps = {
        toolbar: AppToolbar,
        toolbarProps: {},
    };

    render() {
        const {classes, toolbar, toolbarProps, location} = this.props;
        const matchedRoute = ROUTES.routes.find((route) => matchPath(location.pathname, route.route));
        const Toolbar = matchedRoute.toolbar || toolbar;
        const tbProps = matchedRoute.toolbarProps || toolbarProps;
        return (
            <ElevationScroll {...this.props}>
                <AppBar position="fixed" className={classes.root}>
                    <Toolbar {...tbProps}/>
                </AppBar>
            </ElevationScroll>
        );
    }
}

export default compose(
    withRouter,
    withStyles(styles),
    )(TopBar);
