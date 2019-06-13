import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import withStyles from '@material-ui/core/styles/withStyles';
import withWidth, {isWidthDown} from '@material-ui/core/withWidth';

import APP_CONSTANTS from 'constants/app.constants';
import {rootActions} from 'store/root/actions';
import {transitionFor} from 'utils/themes';
import SideMenuNav from 'components/layout/SideMenuComponents/SideMenuNav';
import SideMenuExpander from 'components/layout/SideMenuComponents/SideMenuExpander';

const styles = (theme) => ({
    root: {
        width: APP_CONSTANTS.drawerWidth,
        backgroundColor: theme.palette.background.paper,
    },
    drawer: {
        width: APP_CONSTANTS.drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        overflowX: 'hidden',
        width: APP_CONSTANTS.drawerWidth,
        transition: transitionFor(theme, 'width'),
    },
    drawerClose: {
        overflowX: 'hidden',
        width: theme.spacing(8) + 1,
        transition: transitionFor(theme, 'width', 'leavingScreen'),
    },
    avatar: {
        background: 'transparent',
        color: 'inherit',
    }
});

class SideMenu extends React.Component {

    handleToggleMenu = () => {
        this.props.toggleSidenav();
    };

    render() {
        const {classes, width, sidenavExpanded} = this.props;
        return (
            <Drawer
                variant={isWidthDown('xs', width) ? "temporary" : "permanent"}
                open={sidenavExpanded}
                onClose={this.handleToggleMenu}
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: sidenavExpanded,
                    [classes.drawerClose]: !sidenavExpanded,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: sidenavExpanded,
                        [classes.drawerClose]: !sidenavExpanded,
                    }),
                }}
            >
                <SideMenuNav expanded={sidenavExpanded}/>
                <Hidden xsDown>
                    <SideMenuExpander expanded={sidenavExpanded} onClick={this.handleToggleMenu}/>
                </Hidden>
            </Drawer>
        );
    }
}

export default compose(
    connect(
        state => ({
            sidenavExpanded: state.sidenavExpanded,
        }),
        {
            toggleSidenav: rootActions.toggleSidenav,
        },
    ),
    withStyles(styles),
    withWidth()
)(SideMenu);