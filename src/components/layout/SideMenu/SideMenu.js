import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Drawer, List, ListItem, ListItemIcon, ListItemText, withStyles} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ListAltIcon from '@material-ui/icons/ListAlt';
import {toggleDrawer} from 'store/main/actions';

const styles = theme => ({
    root: {
        width: 250,
        backgroundColor: theme.palette.background.paper,
    },
    selectedLink: {
        backgroundColor: theme.palette.primary.main,
    }
});

class SideMenu extends React.Component {

    handleCloseMenu = () => () => {
        this.props.toggleDrawer(false);
    };

    render() {
        const {classes} = this.props;
        return (
            <Drawer variant="temporary" open={this.props.showDrawer} onClose={this.handleCloseMenu()}>
                <div className={classes.root}>
                    <List component="nav">
                        <ListItem component={NavLink} exact to="/" onClick={this.handleCloseMenu()}
                                  activeClassName={classes.selectedLink} button>
                            <ListItemIcon>
                                <HomeIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Home"/>
                        </ListItem>

                        <ListItem component={NavLink} to="/incursion" onClick={this.handleCloseMenu()}
                                  activeClassName={classes.selectedLink} button>
                            <ListItemIcon>
                                <ListAltIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Incursion room completion tracker"/>
                        </ListItem>
                        <ListItem component={NavLink} to="/hideout" onClick={this.handleCloseMenu()}
                                  activeClassName={classes.selectedLink} button>
                            <ListItemIcon>
                                <ListAltIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Hideouts unlock tracker"/>
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        );
    }
}

SideMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(
    state => ({
        showDrawer: state.main.showDrawer,
    }),
    dispatch => ({
        toggleDrawer: toggle => dispatch(toggleDrawer(toggle))
    }),
)(withStyles(styles)(SideMenu));
