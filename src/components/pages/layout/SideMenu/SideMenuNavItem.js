import React from 'react';
import {NavLink} from 'react-router-dom';
import {Icon, ListItem, ListItemIcon, ListItemText, withStyles} from '@material-ui/core';
import * as PropTypes from 'prop-types';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import noop from 'lodash/noop';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        paddingLeft: theme.spacing(1.5),
        paddingRight: theme.spacing(1.5),
    },
    active: {backgroundColor: theme.palette.secondary.main},
    avatar: {
        background: 'transparent',
        color: 'inherit',
    }
});

class SideMenuNavItem extends React.Component {

    static propTypes = {
        path: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        icon: PropTypes.func,
        avatar: PropTypes.element,
        exact: PropTypes.bool,
        showTooltip: PropTypes.bool,
        onClick: PropTypes.func
    };

    static defaultProps = {
        exact: false,
        showTooltip: false,
        onClick: noop
    };

    render() {
        const {classes, path, text, icon, avatar, exact, showTooltip, onClick} = this.props;
        return (
            <ListItem component={NavLink} exact={exact} to={path} className={classes.root}
                      activeClassName={classes.active} button onClick={() => onClick()}>
                {icon && (
                    <Tooltip title={showTooltip ? (
                        <Typography variant="body1">{text}</Typography>
                    ) : ''} placement="right">
                        <ListItemIcon>
                            <Avatar className={classes.avatar}>
                                <Icon component={icon}/>
                            </Avatar>
                        </ListItemIcon>
                    </Tooltip>
                )}
                {avatar && (
                    <Tooltip title={showTooltip ? (
                        <Typography variant="body1">{text}</Typography>
                    ) : ''} placement="right">
                        <ListItemAvatar>
                            <Avatar className={classes.avatar} alt={text} src={avatar}/>
                        </ListItemAvatar>
                    </Tooltip>
                )}
                <ListItemText primary={text}/>
            </ListItem>
        );
    }
}

export default withStyles(styles)(SideMenuNavItem);
