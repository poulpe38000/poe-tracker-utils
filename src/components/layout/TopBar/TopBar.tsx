import React from 'react';
import {connect} from 'react-redux';
import {AppBar, createStyles, Theme, Toolbar, Typography, withStyles} from '@material-ui/core';
import {rootActions} from 'store/actions';
import TopBarMenuButton from 'components/layout/TopBar/TopBarMenuButton';
import TopBarStats from 'components/layout/TopBar/TopBarStats';

interface Props {
    classes: any,
    toggleSidenav: Function,
}

const styles = ({zIndex, breakpoints, spacing}: Theme) => createStyles({
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

class TopBar extends React.Component<Props> {

    handleOpenMenu = (): void => {
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

export default connect(null,
    {
        toggleSidenav: rootActions.toggleSidenav
    },
)(withStyles(styles)(TopBar));
