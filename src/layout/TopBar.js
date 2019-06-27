import React from 'react';
import {compose} from 'redux';
import {matchPath, withRouter} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger/useScrollTrigger';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

import ROUTES from 'constants/routes.constants';
import AppToolbar from 'layout/components/TopBar/AppToolbar';

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
        scrollTarget: PropTypes.object,
    };
    static defaultProps = {
        toolbar: (<AppToolbar/>),
    };

    renderToolbar() {
        const {toolbar, location} = this.props;
        const matchedRoute = ROUTES.routes.find((route) => matchPath(location.pathname, route.route));
        const customToolbar = (!!matchedRoute && matchedRoute.toolbar) || toolbar;
        return (
            <React.Fragment>
                {customToolbar}
            </React.Fragment>
        );
    }

    render() {
        const {classes, toolbar, location, ...scrollProps} = this.props;
        return (
            <ElevationScroll {...scrollProps}>
                <AppBar position="fixed" className={classes.root}>
                    {this.renderToolbar()}
                </AppBar>
            </ElevationScroll>
        );
    }
}

export default compose(
    withRouter,
    withStyles(styles),
)(TopBar);
