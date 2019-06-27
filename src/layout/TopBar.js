import React from 'react';
import {compose} from 'redux';
import {matchPath, withRouter} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger/useScrollTrigger';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

import ROUTES from 'constants/routes.constants';
import AppToolbar from 'layout/TopBarComponents/AppToolbar';

const styles = ({zIndex}) => ({
    root: {
        zIndex: zIndex.drawer + 1,
    },
});

function ElevationScroll(props) {
    const {children, scrollTarget} = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: (scrollTarget && scrollTarget.current) ? scrollTarget.current : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.node.isRequired,
    scrollTarget: PropTypes.object,
};

class TopBar extends React.Component {
    static propTypes = {
        toolbar: PropTypes.elementType,
        toolbarProps: PropTypes.object,
        scrollTarget: PropTypes.object,
    };
    static defaultProps = {
        toolbar: AppToolbar,
        toolbarProps: {},
    };

    render() {
        const {classes, toolbar, toolbarProps, location, ...scrollProps} = this.props;
        const matchedRoute = ROUTES.routes.find((route) => matchPath(location.pathname, route.route));
        const Toolbar = (!!matchedRoute && matchedRoute.toolbar) || toolbar;
        const tbProps = (!!matchedRoute && matchedRoute.toolbarProps) || toolbarProps;
        return (
            <ElevationScroll {...scrollProps}>
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
