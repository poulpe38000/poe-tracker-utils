import React from 'react';
import {NavLink} from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

const styles = ({palette, spacing}) => ({
    root: {
        paddingLeft: spacing(1.5),
        paddingRight: spacing(1.5),
    },
    active: {
        backgroundColor: palette.secondary.light,
        color: palette.primary.contrastText,
        pointerEvents: 'none',
    },
    avatar: {
        background: 'transparent',
        color: 'inherit',
    }
});

const MenuNavLink = React.forwardRef((props, ref) => <NavLink innerRef={ref} {...props} />);

class NavItem extends React.Component {

    static propTypes = {
        label: PropTypes.string.isRequired,
        icon: PropTypes.element.isRequired,
        link: PropTypes.object.isRequired,
        expanded: PropTypes.bool,
    };

    static defaultProps = {
        expanded: false,
    };

    render() {
        const {classes, link, label, icon, expanded} = this.props;
        const tooltipLabel = (<Typography variant="body1">{label}</Typography>);
        const emptyTooltipLabel = '';
        return (
            <Tooltip title={!expanded ? tooltipLabel : emptyTooltipLabel}
                     placement="right"
                     disableTouchListener
                     enterDelay={300}
            >
                <ListItem component={MenuNavLink}
                          className={classes.root}
                          activeClassName={classes.active}
                          button
                          {...link}
                >
                    <ListItemAvatar>
                        {icon}
                    </ListItemAvatar>
                    <ListItemText primary={label}/>
                </ListItem>
            </Tooltip>
        );
    }
}

export default withStyles(styles)(NavItem);
