import React from 'react';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

import {itemStyles} from 'components/Settings/shared';


class SettingsAppItem extends React.Component {
    static propTypes = {
        primaryText: PropTypes.string.isRequired,
        icon: PropTypes.elementType.isRequired,
        value: PropTypes.bool.isRequired,
        onClick: PropTypes.func.isRequired,
        noDivider: PropTypes.bool
    };

    static defaultProps = {
        noDivider: false
    };

    render() {
        const {classes, primaryText, icon, value, onClick, noDivider} = this.props;
        const AppItemIcon = icon;
        return (
            <React.Fragment>
                <ListItem button disableRipple className={classes.item} onClick={onClick}>
                    <ListItemIcon>
                        <AppItemIcon/>
                    </ListItemIcon>
                    <ListItemText primary={primaryText}/>
                    <ListItemSecondaryAction>
                        <Switch
                            onChange={onClick}
                            checked={value}
                        />
                    </ListItemSecondaryAction>
                </ListItem>
                {!noDivider && <Divider/>}
            </React.Fragment>
        );
    }
}

export default withStyles(itemStyles)(SettingsAppItem);