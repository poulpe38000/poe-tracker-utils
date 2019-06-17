import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger/useScrollTrigger';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

import {rootActions} from 'store/root/actions';
import TopBarMenuButton from 'layout/TopBarComponents/TopBarMenuButton';
import TopBarStats from 'layout/TopBarComponents/TopBarStats';

const styles = ({zIndex, breakpoints, spacing}) => ({
    root: {
        zIndex: zIndex.drawer + 1,
    },
    toolbar: {
        [breakpoints.down('sm')]: {
            paddingLeft: spacing(1),
            paddingRight: spacing(1),
        },
    },
    title: {flexGrow: 1},
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

    handleOpenMenu = () => {
        this.props.toggleSidenav();
    };

    render() {
        const {classes} = this.props;
        return (
            <ElevationScroll {...this.props}>
                <AppBar position="fixed" className={classes.root}>
                    <Toolbar className={classes.toolbar}>
                        <Hidden mdUp>
                            <TopBarMenuButton onClick={this.handleOpenMenu}/>
                        </Hidden>
                        <Typography variant="h6" color="inherit" className={classes.title}>
                            PoE Tracker Utils
                        </Typography>
                        <Hidden xsDown>
                            <TopBarStats/>
                        </Hidden>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        );
    }
}

export default compose(
    connect(
        null,
        {
            toggleSidenav: rootActions.toggleSidenav,
        },
    ),
    withStyles(styles),
)(TopBar);
