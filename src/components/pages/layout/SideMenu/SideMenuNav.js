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
import * as PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {IconAvatar, ImageAvatar} from 'components/shared';

const styles = theme => ({
    toolbarSpacer: {
        ...theme.mixins.toolbar,
    },
    spacer: {
        flex: '1 1 auto',
    },
});

class SideMenuNav extends React.Component {

    static propTypes = {
        expanded: PropTypes.bool.isRequired,
    };

    constructor(props) {
        super(props);
        this.items = [
            {
                to: APP_CONSTANTS.routes.root,
                label: 'Home',
                icon: HomeIcon,
                avatar: IconAvatar,
                exact: true
            },
            {
                to: APP_CONSTANTS.routes.hideouts.root,
                label: 'Hideouts unlocks',
                icon: hideoutLogo,
                avatar: ImageAvatar,
            },
            {
                to: APP_CONSTANTS.routes.incursions.root,
                label: 'Incursion rooms',
                icon: incursionLogo,
                avatar: ImageAvatar,
            },
            {
                to: APP_CONSTANTS.routes.settings.root,
                label: 'Settings',
                icon: SettingsIcon,
                avatar: IconAvatar,
            },
        ]
    }

    render() {
        const {classes, toggleSidenav, width, expanded} = this.props;
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
                                             to={item.to}
                                             label={item.label}
                                             icon={item.icon}
                                             avatar={item.avatar}
                                             exact={item.exact}
                                             showTooltip={!isWidthDown('xs', width) && !expanded}
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
    withRouter,
    connect(
        state => ({}),
        dispatch => ({
            toggleSidenav: () => dispatch(toggleSidenav())
        }),
    ),
    withStyles(styles),
    withWidth()
)(SideMenuNav);
