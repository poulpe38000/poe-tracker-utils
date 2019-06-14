import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

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

class TopBar extends React.Component {

    handleOpenMenu = () => {
        this.props.toggleSidenav();
    };

    render() {
        const {classes} = this.props;
        return (
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