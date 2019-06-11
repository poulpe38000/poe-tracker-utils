import React from 'react';
import clsx from 'clsx';
import {connect} from 'react-redux';
import {createStyles, Drawer, Theme, withStyles, withWidth} from '@material-ui/core';
import {rootActions} from 'store/actions';
import {isWidthDown, isWidthUp} from '@material-ui/core/withWidth';
import APP_CONSTANTS from 'constants/app.constants';
import {transitionFor} from 'utils/themes';
import SideMenuNav from 'components/layout/SideMenu/SideMenuNav';
import SideMenuExpander from 'components/layout/SideMenu/SideMenuExpander';
import {Breakpoint} from '@material-ui/core/styles/createBreakpoints';
import {IAppState} from 'store/state';

interface Props {
    classes: any,
    width: Breakpoint,
    sidenavExpanded: boolean,
    toggleSidenav: Function,
}

const styles = (theme: Theme) => createStyles({
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
        transition: transitionFor(theme, 'width'),
    },
    avatar: {
        background: 'transparent',
        color: 'inherit',
    }
});

class SideMenu extends React.Component<Props> {

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

export default connect(
        (state: IAppState) => ({
            sidenavExpanded: state.sidenavExpanded,
        }),
        {
            toggleSidenav: rootActions.toggleSidenav,
        },
    )(withStyles(styles)(withWidth()(SideMenu)));
