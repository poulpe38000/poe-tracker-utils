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

import IconAvatar from 'components/shared/Avatar/IconAvatar';

const styles = (theme) => ({
    root: {
        paddingLeft: theme.spacing(1.5),
        paddingRight: theme.spacing(1.5),
    },
});

class MenuExpander extends React.Component {
    static propTypes = {
        expanded: PropTypes.bool.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    renderExpanded() {
        return this.renderItem('Collapse menu', ChevronLeftIcon);
    }

    renderCollapsed() {
        return (
            <Tooltip
                title={(<Typography variant="body1">{'Expand menu'}</Typography>)}
                placement="right"
                disableTouchListener
                enterDelay={300}
            >
                {this.renderItem('Expand menu', ChevronRightIcon)}
            </Tooltip>
        );
    }

    renderItem(label, icon) {
        const {classes, onClick} = this.props;
        return (
            <ListItem className={classes.root} button onClick={onClick}>
                <ListItemAvatar>
                    <IconAvatar
                        label={label}
                        value={icon}/>
                </ListItemAvatar>
                <ListItemText primary={'Collapse menu'}/>
            </ListItem>
        );
    }

    render() {
        const {expanded} = this.props;
        return (
            <List disablePadding>
                {expanded
                    ? this.renderExpanded()
                    : this.renderCollapsed()
                }
            </List>
        );
    }
}

export default withStyles(styles)(MenuExpander);
