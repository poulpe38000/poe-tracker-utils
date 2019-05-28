import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {AppBar, Toolbar, Typography, withStyles, withWidth} from '@material-ui/core';
import {toggleDrawer} from 'store/main/actions';
import {isWidthDown, isWidthUp} from '@material-ui/core/withWidth';
import {TopBarActions, TopBarActionsXs, TopBarMenuButton} from 'components/pages/layout/TopBar';
import HideoutStats from 'components/Hideout/HideoutStats/HideoutStats';
import IncursionStats from 'components/Incursion/IncursionStats/IncursionStats';

const styles = theme => ({
    root: {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 0,
            paddingRight: 0,
        },
    },
    appTitle: {flexGrow: 1},
    stats: {
        textAlign: 'right',
    },
});

class TopBar extends React.Component {

    handleOpenMenu = () => {
        this.props.toggleDrawer(true);
    };

    render() {
        const {classes, width} = this.props;
        return (
            <AppBar position="fixed">
                <Toolbar className={classes.root}>
                    <TopBarMenuButton onClick={this.handleOpenMenu}/>
                    <Typography variant="h6" color="inherit" className={classes.appTitle}>
                        PoE Tracker Helpers
                    </Typography>
                    {isWidthUp('xs', width, false) && (
                        <div>
                            <div className={classes.stats}>
                                <HideoutStats/>
                            </div>
                            <div className={classes.stats}>
                                <IncursionStats/>
                            </div>
                        </div>
                    )}
                    {isWidthDown('xs', width) ? <TopBarActionsXs/> : <TopBarActions/>}
                </Toolbar>
            </AppBar>
        );
    }
}

export default compose(
    connect(null,
        dispatch => ({
            toggleDrawer: toggle => dispatch(toggleDrawer(toggle))
        }),
    ),
    withStyles(styles),
    withWidth()
)(TopBar);
