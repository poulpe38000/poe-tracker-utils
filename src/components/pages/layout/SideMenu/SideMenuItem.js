import React from 'react';
import {NavLink} from 'react-router-dom';
import {Icon, ListItem, ListItemIcon, ListItemText, withStyles} from '@material-ui/core';
import * as PropTypes from 'prop-types';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
    selectedLink: {backgroundColor: theme.palette.primary.main},
    avatar: {
        background: 'transparent',
        color: 'inherit',
    }
});

class SideMenuItem extends React.Component {

    static propTypes = {
        path: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        icon: PropTypes.func,
        avatar: PropTypes.element,
        exact: PropTypes.bool,
        onClick: PropTypes.func.isRequired,
    };

    static defaultProps = {
        exact: false
    };

    render() {
        const {classes, path, text, icon, avatar, onClick, exact} = this.props;
        return (
            <ListItem component={NavLink} exact={exact} to={path} onClick={() => onClick()}
                      activeClassName={classes.selectedLink} button>
                {icon && <ListItemIcon>
                    <Avatar className={classes.avatar}>
                        <Icon component={icon}/>
                    </Avatar>
                </ListItemIcon>}
                {avatar && <ListItemAvatar>
                    <Avatar className={classes.avatar} alt={text} src={avatar}/>
                </ListItemAvatar>}
                <ListItemText primary={text}/>
            </ListItem>
        );
    }
}

export default withStyles(styles)(SideMenuItem);
