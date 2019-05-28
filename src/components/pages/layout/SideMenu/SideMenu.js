import React from 'react';
import {connect} from 'react-redux';
import {Drawer, List, withStyles} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ListAltIcon from '@material-ui/icons/ListAlt';
import SettingsIcon from '@material-ui/icons/Settings';
import {toggleDrawer} from 'store/main/actions';
import {compose} from 'redux';
import {SideMenuItem} from 'components/pages/layout/SideMenu';

const styles = theme => ({
    root: {
        width: 250,
        backgroundColor: theme.palette.background.paper,
    },
});

class SideMenu extends React.Component {


    constructor(props) {
        super(props);
        this.items = [
            {path: '/', text: 'Home', icon: HomeIcon},
            {path: '/trackers', text: 'Trackers', icon: ListAltIcon},
            {path: '/settings', text: 'Settings', icon: SettingsIcon},
        ]
    }

    handleCloseMenu = () => {
        this.props.toggleDrawer(false);
    };

    render() {
        const {classes, showDrawer} = this.props;
        return (
            <Drawer variant="temporary" open={showDrawer} onClose={this.handleCloseMenu}>
                <div className={classes.root}>
                    <List component="nav">
                        {this.items.map((item, key) => (
                                <SideMenuItem key={key}
                                              path={item.path} text={item.text} icon={item.icon}
                                              onClick={this.handleCloseMenu}/>
                            )
                        )}
                    </List>
                </div>
            </Drawer>
        );
    }
}

export default compose(
    connect(
        state => ({
            showDrawer: state.main.showDrawer,
        }),
        dispatch => ({
            toggleDrawer: toggle => dispatch(toggleDrawer(toggle))
        }),
    ),
    withStyles(styles)
)(SideMenu);
