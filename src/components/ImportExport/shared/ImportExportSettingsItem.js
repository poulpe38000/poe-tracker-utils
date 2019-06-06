import React from 'react'
import {ListItem, ListItemSecondaryAction, ListItemText, Switch} from '@material-ui/core';
import * as PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
    listItem: {
        '&:hover': {
            backgroundColor: 'inherit',
        }
    },
};

class ImportExportSettingsItem extends React.Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        value: PropTypes.bool.isRequired,
        onClick: PropTypes.func.isRequired
    };

    render() {
        const {classes, label, value, onClick} = this.props;
        return (
            <ListItem button disableRipple className={classes.listItem} onClick={onClick}>
                <ListItemText primary={label} />
                <ListItemSecondaryAction>
                    <Switch
                        onChange={onClick}
                        checked={value}
                    />
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

export default withStyles(styles)(ImportExportSettingsItem);
