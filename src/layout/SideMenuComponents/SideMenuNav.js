import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import withWidth, {isWidthDown} from '@material-ui/core/withWidth';
import noop from 'lodash/noop';
import * as PropTypes from 'prop-types';
import {rootActions} from 'store/root/actions';
import SideMenuNavList from 'layout/SideMenuComponents/SideMenuNavList';
import {sideMenuElements} from 'layout/SideMenuComponents/constants';

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
                <Box className={classes.root}>
                    <SideMenuNavList
                        items={sideMenuElements.pages}
                        expanded={!isWidthDown('xs', width) && expanded}
                        onClick={isWidthDown('xs', width) ? toggleSidenav : noop}
                    />
                    <Box className={classes.spacer}/>
                    <SideMenuNavList
                        items={sideMenuElements.settings}
                        expanded={!isWidthDown('xs', width) && expanded}
                        onClick={isWidthDown('xs', width) ? toggleSidenav : noop}
                    />
                </Box>
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
