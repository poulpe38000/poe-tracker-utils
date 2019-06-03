import React from 'react';
import {NavLink} from 'react-router-dom';
import {ListItem, ListItemText, withStyles} from '@material-ui/core';
import * as PropTypes from 'prop-types';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import noop from 'lodash/noop';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import {IconAvatar, ImageAvatar} from 'components/shared';

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

const MenuNavLink = React.forwardRef((props, ref) => <NavLink innerRef={ref} {...props} />);

class SideMenuNavItem extends React.Component {

    static propTypes = {
        to: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        avatar: PropTypes.oneOf([IconAvatar, ImageAvatar]),
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
        const {classes, to, label, icon, exact, showTooltip, onClick} = this.props;
        const MenuAvatar = this.props.avatar;
        return (
            <ListItem component={MenuNavLink}
                      className={classes.root}
                      activeClassName={classes.active}
                      to={to}
                      exact={exact}
                      button
                      onClick={() => onClick()}
            >
                <Tooltip title={showTooltip ? (
                    <Typography variant="body1">{label}</Typography>
                ) : ''} placement="right">
                    <ListItemAvatar>
                        <MenuAvatar label={label} value={icon}/>
                    </ListItemAvatar>
                </Tooltip>
                <ListItemText primary={label}/>
            </ListItem>
        );
    }
}

export default withStyles(styles)(SideMenuNavItem);
