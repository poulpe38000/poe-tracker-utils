import React from 'react'
import {ListItem, ListItemSecondaryAction, ListItemText, Switch} from '@material-ui/core';
import * as PropTypes from 'prop-types';

class ImportSettingsItem extends React.Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        value: PropTypes.bool.isRequired,
        onClick: PropTypes.func.isRequired
    };

    render() {
        const {label, value, onClick} = this.props;
        return (
            <ListItem dense button onClick={() => onClick()}>
                <ListItemText primary={label}/>
                <ListItemSecondaryAction>
                    <Switch
                        onChange={() => onClick()}
                        checked={value}
                    />
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

export default ImportSettingsItem;
