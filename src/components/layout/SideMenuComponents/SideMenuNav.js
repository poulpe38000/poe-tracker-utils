import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import withRouter from 'react-router-dom/withRouter';
import SettingsIcon from '@material-ui/icons/Settings';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import withWidth, {isWidthDown} from '@material-ui/core/withWidth';
import noop from 'lodash/noop';
import * as PropTypes from 'prop-types';

import APP_CONSTANTS from 'constants/app.constants';
import homeLogo from './home_logo.png';
import hideoutLogo from './hideout_logo.png';
import incursionLogo from './incursion_logo.png';
import filterLogo from './filter_logo.png';
import {rootActions} from 'store/root/actions';
import {IconAvatar, ImageAvatar} from 'components/shared';
import SideMenuNavList from 'components/layout/SideMenuComponents/SideMenuNavList';

const styles = ({mixins, breakpoints, spacing}) => ({
    root: {
        paddingTop: spacing(1),
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        [breakpoints.down('xs')]: {
            paddingTop: 0,
        },
    },
    toolbarSpacer: {
        ...mixins.toolbar,
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
        this.items = {
            pages: [
                {
                    link: {to: APP_CONSTANTS.routes.root, exact: true},
                    label: 'Home',
                    icon: homeLogo,
                    avatar: ImageAvatar,
                },
                {
                    link: {to: APP_CONSTANTS.routes.hideouts.root},
                    label: 'Hideouts unlocks',
                    icon: hideoutLogo,
                    avatar: ImageAvatar,
                },
                {
                    link: {to: APP_CONSTANTS.routes.incursions.root},
                    label: 'Incursion rooms',
                    icon: incursionLogo,
                    avatar: ImageAvatar,
                },
                {
                    link: {to: APP_CONSTANTS.routes.filters.root},
                    label: 'Filter editor',
                    icon: filterLogo,
                    avatar: ImageAvatar,
                },
            ],
            settings: [
                {
                    link: {to: APP_CONSTANTS.routes.import_export.root},
                    label: 'Import / Export',
                    icon: ImportExportIcon,
                    avatar: IconAvatar,
                },
                {
                    link: {to: APP_CONSTANTS.routes.settings.root},
                    label: 'Settings',
                    icon: SettingsIcon,
                    avatar: IconAvatar,
                },
            ]
        }
    }

    render() {
        const {classes, toggleSidenav, width, expanded} = this.props;
        return (
            <React.Fragment>
                <AppBar color="primary" position="static" elevation={isWidthDown('xs', width) ? 1 : 0}>
                    <Toolbar color="primary" className={classes.toolbarSpacer}>
                        <Typography variant="h6" color="inherit">
                            {'PoE Tracker Utils'}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div className={classes.root}>
                    <SideMenuNavList
                        items={this.items.pages}
                        expanded={!isWidthDown('xs', width) && expanded}
                        onClick={isWidthDown('xs', width) ? toggleSidenav : noop}
                    />
                    <div className={classes.spacer}/>
                    <SideMenuNavList
                        items={this.items.settings}
                        expanded={!isWidthDown('xs', width) && expanded}
                        onClick={isWidthDown('xs', width) ? toggleSidenav : noop}
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default compose(
    withRouter,
    connect(
        null,
        {
            toggleSidenav: rootActions.toggleSidenav,
        },
    ),
    withStyles(styles),
    withWidth(),
)(SideMenuNav);
