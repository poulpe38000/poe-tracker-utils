import React from 'react';
import clsx from 'clsx';
import {connect} from 'react-redux';
import {Drawer, withStyles, withWidth} from '@material-ui/core';
import {rootActions} from 'store/actions';
import {compose} from 'redux';
import {SideMenuExpander, SideMenuNav} from 'components/pages/layout/SideMenu';
import {isWidthDown, isWidthUp} from '@material-ui/core/withWidth';
import APP_CONSTANTS from 'constants/app.constants';
import {transitionFor} from 'utils/themes';

const drawerWidth = APP_CONSTANTS.drawerWidth;

const styles = theme => ({
    root: {
        width: drawerWidth,
        backgroundColor: theme.palette.background.paper,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        overflowX: 'hidden',
        width: drawerWidth,
        transition: transitionFor(theme, 'width'),
    },
    drawerClose: {
        overflowX: 'hidden',
        width: theme.spacing(8) + 1,
        transition: transitionFor(theme, 'width'),
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
                {isWidthUp('sm', width) && <SideMenuExpander expanded={sidenavExpanded} onClick={this.handleToggleMenu}/>}
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
