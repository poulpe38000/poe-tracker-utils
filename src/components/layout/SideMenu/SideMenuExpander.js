import React from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

import {IconAvatar} from 'components/shared';

const styles = (theme) => ({
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
        const tooltipLabel = (<Typography variant="body1">{'Expand menu'}</Typography>);
        const emptyTooltipLabel = '';
        return (
            <List disablePadding>
                <Tooltip
                    title={!expanded ? tooltipLabel : emptyTooltipLabel}
                    placement="right"
                    disableTouchListener
                    enterDelay={300}
                >
                    <ListItem className={classes.root} button onClick={onClick}>
                        <ListItemAvatar>
                            <IconAvatar
                                label={expanded ? 'Collapse menu' : 'Expand menu'}
                                value={expanded ? ChevronLeftIcon : ChevronRightIcon}/>
                        </ListItemAvatar>
                        <ListItemText primary={'Collapse menu'}/>
                    </ListItem>
                </Tooltip>
            </List>
        );
    }
}

export default withStyles(styles)(SideMenuExpander);
