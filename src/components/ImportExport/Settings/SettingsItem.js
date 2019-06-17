import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';
import * as PropTypes from 'prop-types';

class SettingsItem extends React.Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        value: PropTypes.bool.isRequired,
        onClick: PropTypes.func.isRequired
    };

    render() {
        const {label, value, onClick} = this.props;
        return (
            <ListItem button onClick={onClick}>
                <ListItemText primary={label}/>
                <ListItemSecondaryAction>
                    <Switch onChange={onClick} checked={value}/>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

export default SettingsItem;
