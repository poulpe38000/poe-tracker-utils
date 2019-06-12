import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import {toggleSidenav} from 'store/main/actions';
import TopBarMenuButton from 'components/layout/TopBar/TopBarMenuButton';
import TopBarStats from 'components/layout/TopBar/TopBarStats';

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
    connect(
        null,
        {toggleSidenav: toggleSidenav},
    ),
    withStyles(styles),
)(TopBar);