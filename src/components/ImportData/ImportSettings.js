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

class ImportSettings extends React.Component {
    static propTypes = {
        opts: PropTypes.object.isRequired,
        onClick: PropTypes.func.isRequired
    };

    static defaultProps = {
        opts: {
            ignoreHideouts: false,
            ignoreInProgressIncursions: false,
            ignoreCompletedIncursions: false,
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
                    <ListItem dense button onClick={this.handleSettingsSwitch('ignoreHideouts')}>
                        <ListItemText primary="Import Hideouts"/>
                        <ListItemSecondaryAction>
                            <Switch
                                onChange={this.handleSettingsSwitch('ignoreHideouts')}
                                checked={!opts.ignoreHideouts}
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem dense button onClick={this.handleSettingsSwitch('ignoreInProgressIncursions')}>
                        <ListItemText primary="Import In-Progress Incursions"/>
                        <ListItemSecondaryAction>
                            <Switch
                                onChange={this.handleSettingsSwitch('ignoreInProgressIncursions')}
                                checked={!opts.ignoreInProgressIncursions}
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem dense button onClick={this.handleSettingsSwitch('ignoreCompletedIncursions')}>
                        <ListItemText primary="Import Completed Incursions"/>
                        <ListItemSecondaryAction>
                            <Switch
                                onChange={this.handleSettingsSwitch('ignoreCompletedIncursions')}
                                checked={!opts.ignoreCompletedIncursions}
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>
            </div>
        );
    }
}

export default withStyles(styles)(ImportSettings);
