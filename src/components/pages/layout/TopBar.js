import React from 'react';
import {connect} from 'react-redux';
import {AppBar, IconButton, Toolbar, Typography, withStyles} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {toggleDrawer} from 'store/main/actions';
import {TopBarActions} from 'components/pages/layout/index';

const styles = theme => ({
    root: {
        paddingLeft: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 0,
            paddingRight: 0,
        },
    },
    menuButton: {marginRight: theme.spacing.unit * 2},
    appTitle: {flexGrow: 1},
});

class TopBar extends React.Component {

    handleOpenMenu = () => () => {
        this.props.toggleDrawer(true);
    };

    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <AppBar position="fixed" style={{top: 0}}>
                    <Toolbar className={classes.root}>
                        <IconButton aria-label="Menu" onClick={this.handleOpenMenu()} className={classes.menuButton}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.appTitle}>
                            PoE Tracker Helpers
                        </Typography>
                        <TopBarActions/>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        );
    }
}

export default connect(
    state => ({
        showDrawer: state.main.showDrawer
    }),
    dispatch => ({
        toggleDrawer: toggle => dispatch(toggleDrawer(toggle))
    }),
)(withStyles(styles)(TopBar));
