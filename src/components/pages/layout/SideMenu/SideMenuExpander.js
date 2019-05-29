import React from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {withStyles} from '@material-ui/core';
import * as PropTypes from 'prop-types';

const styles = theme => ({
    root: {
        paddingLeft: theme.spacing(1.5),
        paddingRight: theme.spacing(1.5),
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
                <ListItem className={classes.root} button onClick={() => onClick()}>
                    <ListItemIcon>
                        <Avatar className={classes.avatar}>
                            {expanded ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                        </Avatar>
                    </ListItemIcon>
                    <ListItemText primary="Collapsed"/>
                </ListItem>
            </List>
        );
    }
}

export default withStyles(styles)(SideMenuExpander);
