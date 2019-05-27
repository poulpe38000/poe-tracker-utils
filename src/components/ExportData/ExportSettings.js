import React from 'react'
import {List, ListItem, ListItemSecondaryAction, ListItemText, Switch, withStyles} from '@material-ui/core';
import * as PropTypes from 'prop-types';

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    list: {
        width: '100%',
        maxWidth: 360,
    },
};

class ExportSettings extends React.Component {
    static propTypes = {
        opts: PropTypes.object.isRequired,
        onClick: PropTypes.func.isRequired
    };

    static defaultProps = {
        opts: {
            includeHideouts: true,
            includeInProgressIncursions: true,
            includeCompletedIncursions: true,
        },
    };

    handleSettingsSwitch = (value) => () => {
        this.props.onClick(value);
    };

    render() {
        const {classes, opts} = this.props;
        return (
            <div className={classes.root}>
                <List className={classes.list}>
                    <ListItem dense button onClick={this.handleSettingsSwitch('includeHideouts')}>
                        <ListItemText primary="Export Hideouts"/>
                        <ListItemSecondaryAction>
                            <Switch
                                onChange={this.handleSettingsSwitch('includeHideouts')}
                                checked={opts.includeHideouts}
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem dense button onClick={this.handleSettingsSwitch('includeInProgressIncursions')}>
                        <ListItemText primary="Export In-Progress Incursions"/>
                        <ListItemSecondaryAction>
                            <Switch
                                onChange={this.handleSettingsSwitch('includeInProgressIncursions')}
                                checked={opts.includeInProgressIncursions}
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem dense button onClick={this.handleSettingsSwitch('includeCompletedIncursions')}>
                        <ListItemText primary="Export Completed Incursions"/>
                        <ListItemSecondaryAction>
                            <Switch
                                onChange={this.handleSettingsSwitch('includeCompletedIncursions')}
                                checked={opts.includeCompletedIncursions}
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>
            </div>
        );
    }
}

export default withStyles(styles)(ExportSettings);
