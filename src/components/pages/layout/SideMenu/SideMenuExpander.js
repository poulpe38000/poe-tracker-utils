import React from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {withStyles} from '@material-ui/core';
import * as PropTypes from 'prop-types';
import {IconAvatar} from 'components/shared';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

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
            <List disablePadding>
                <ListItem className={classes.root} button onClick={onClick}>
                    <ListItemAvatar>
                        <IconAvatar
                            label={expanded ? 'Collapse menu' : 'Expand menu'}
                            value={expanded ? ChevronLeftIcon : ChevronRightIcon}/>
                    </ListItemAvatar>
                    <ListItemText primary={'Collapse menu'}/>
                </ListItem>
            </List>
        );
    }
}

export default withStyles(styles)(SideMenuExpander);
