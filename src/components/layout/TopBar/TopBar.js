import React from 'react';
import {connect} from 'react-redux';
import {AppBar, IconButton, Toolbar, Typography, withStyles} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {toggleDrawer} from 'store/main/actions';
import ImportData from 'components/import/ImportData/ImportData';
import ExportData from 'components/export/ExportData/ExportData';
import Settings from 'components/Settings/Settings';

const styles = theme => ({
    root: {paddingLeft: theme.spacing.unit, paddingRight: theme.spacing.unit},
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
                <AppBar position="static">
                    <Toolbar className={classes.root}>
                        <IconButton
                            color="inherit"
                            aria-label="Menu"
                            onClick={this.handleOpenMenu()}
                            className={classes.menuButton}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.appTitle}>
                            PoE Tracker Helpers
                        </Typography>
                        <ImportData/>
                        <ExportData/>
                        <Settings/>
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
