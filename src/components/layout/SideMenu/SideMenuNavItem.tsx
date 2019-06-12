import React from 'react';
import {NavLink, NavLinkProps} from 'react-router-dom';
import {createStyles, ListItem, ListItemText, Theme, withStyles} from '@material-ui/core';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

interface Props {
    classes: any,
    label: string,
    icon: any,
    avatar: any,
    link: any,
    expanded?: boolean,
}

const styles = ({palette, spacing}: Theme) => createStyles({
    root: {
        paddingLeft: spacing(1.5),
        paddingRight: spacing(1.5),
    },
    active: {
        backgroundColor: palette.primary.light,
        color: palette.primary.contrastText,
        pointerEvents: 'none',
    },
    avatar: {
        background: 'transparent',
        color: 'inherit',
    }
});

const MenuNavLink = React.forwardRef<any, NavLinkProps>((props: NavLinkProps, ref: any) => <NavLink innerRef={ref} {...props} />);

class SideMenuNavItem extends React.Component<Props> {

    // static propTypes = {
    //     label: PropTypes.string.isRequired,
    //     icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    //     avatar: PropTypes.oneOf([IconAvatar, ImageAvatar]).isRequired,
    //     link: PropTypes.object.isRequired,
    //     expanded: PropTypes.bool,
    // };
    //
    // static defaultProps = {
    //     expanded: false,
    // };

    render() {
        const {classes, link, avatar, label, icon, expanded} = this.props;
        const tooltipLabel = (<Typography variant="body1">{label}</Typography>);
        const emptyTooltipLabel = '';
        const MenuAvatar = avatar;
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
                        <MenuAvatar label={label} value={icon}/>
                    </ListItemAvatar>
                    <ListItemText primary={label}/>
                </ListItem>
            </Tooltip>
        );
    }
}

export default withStyles(styles)(SideMenuNavItem);
