import React from 'react';
import {List, Typography, withStyles, withWidth} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import {SideMenuNavItem} from 'components/pages/layout/SideMenu';
import hideoutLogo from './hideout_logo.png';
import incursionLogo from './incursion_logo.png';
import APP_CONSTANTS from 'constants/app.constants';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {toggleSidenav} from 'store/main/actions';
import {isWidthDown} from '@material-ui/core/withWidth';
import noop from 'lodash/noop';

const styles = theme => ({
    toolbarSpacer: {
        ...theme.mixins.toolbar,
    },
    spacer: {
        flex: '1 1 auto',
    },
});

class SideMenuNav extends React.Component {

    constructor(props) {
        super(props);
        this.items = [
            {path: APP_CONSTANTS.routes.root, text: 'Home', icon: HomeIcon, exact: true},
            {path: APP_CONSTANTS.routes.hideouts.root, text: 'Hideouts unlocks', avatar: hideoutLogo},
            {path: APP_CONSTANTS.routes.incursions.root, text: 'Incursion rooms', avatar: incursionLogo},
            {path: APP_CONSTANTS.routes.settings.root, text: 'Settings', icon: SettingsIcon},
        ]
    }

    render() {
        const {classes, toggleSidenav, width} = this.props;
        return (
            <React.Fragment>
                <Toolbar className={classes.toolbarSpacer}>
                    <Typography variant="h6" color="inherit">
                        PoE Tracker Helpers
                    </Typography>
                </Toolbar>
                <Divider/>
                <List component="nav">
                    {this.items.map((item, key) => (
                            <SideMenuNavItem key={key}
                                             path={item.path}
                                             text={item.text}
                                             icon={item.icon}
                                             avatar={item.avatar}
                                             exact={item.exact}
                                             onClick={isWidthDown('xs', width) ? toggleSidenav : noop}
                            />
                        )
                    )}
                </List>
                <div className={classes.spacer}/>
            </React.Fragment>
        );
    }
}

export default compose(
    connect(
        null,
        dispatch => ({
            toggleSidenav: () => dispatch(toggleSidenav())
        }),
    ),
    withStyles(styles),
    withWidth()
)(SideMenuNav);
