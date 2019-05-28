import React from 'react';
import {NavLink} from 'react-router-dom';
import {Icon, ListItem, ListItemIcon, ListItemText, withStyles} from '@material-ui/core';
import * as PropTypes from 'prop-types';

const styles = theme => ({
    selectedLink: {backgroundColor: theme.palette.primary.main}
});

class SideMenuItem extends React.Component {

    static propTypes = {
        path: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        icon: PropTypes.func.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    render() {
        const {classes, path, text, icon, onClick} = this.props;
        return (
            <ListItem component={NavLink} exact to={path} onClick={() => onClick()}
                      activeClassName={classes.selectedLink} button>
                <ListItemIcon>
                    <Icon component={icon}/>
                </ListItemIcon>
                <ListItemText primary={text}/>
            </ListItem>
        );
    }
}

export default withStyles(styles)(SideMenuItem);
