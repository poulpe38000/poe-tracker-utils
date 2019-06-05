import React from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Icon, withStyles} from '@material-ui/core';
import * as PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        paddingLeft: theme.spacing(1.5),
        paddingRight: theme.spacing(1.5),
    },
    tooltip: {
        margin: 0,
        marginLeft: theme.spacing(-.5),
        height: theme.spacing(7),
        display: 'flex',
        alignItems: 'center',
        borderRadius: 0,
    },
    avatar: {
        background: 'transparent',
        color: 'inherit',
    }
});

class SideMenuExpander extends React.Component {

    static propTypes = {
        expanded: PropTypes.bool.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    render() {
        const {classes, expanded, onClick} = this.props;
        return (
            <List disablePadding={true}>
                <ListItem className={classes.root} button onClick={onClick}>
                    <Tooltip title={expanded ? '' : (
                        <Typography variant="body1">Expand menu</Typography>
                    )} placement="right" classes={{tooltipPlacementRight: classes.tooltip}}>
                        <ListItemIcon>
                            <Avatar className={classes.avatar}>
                                <Icon component={expanded ? ChevronLeftIcon : ChevronRightIcon}/>
                            </Avatar>
                        </ListItemIcon>
                    </Tooltip>
                    <ListItemText primary="Collapse menu"/>
                </ListItem>
            </List>
        );
    }
}

export default withStyles(styles)(SideMenuExpander);
