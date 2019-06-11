import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {AppBar, Toolbar, Typography, withStyles} from '@material-ui/core';
import {rootActions} from 'store/actions';
import {TopBarMenuButton, TopBarStats} from 'components/pages/layout/TopBar';

const styles = theme => ({
    root: {
        zIndex: theme.zIndex.drawer + 1,
    },
    toolbar: {
        [theme.breakpoints.down('sm')]: {
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
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
                    <TopBarMenuButton onClick={this.handleOpenMenu}/>
                    <Typography variant="h6" color="inherit" className={classes.title}>
                        PoE Tracker Utils
                    </Typography>
                    <TopBarStats/>
                </Toolbar>
            </AppBar>
        );
    }
}

export default compose(
    connect(null,
        {
            toggleSidenav: rootActions.toggleSidenav
        },
    ),
    withStyles(styles),
)(TopBar);
