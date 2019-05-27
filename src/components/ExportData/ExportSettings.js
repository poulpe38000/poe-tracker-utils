import React from 'react'
import {List, withStyles} from '@material-ui/core';
import * as PropTypes from 'prop-types';
import {ExportSettingsItem} from 'components/ExportData';

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
                    <ExportSettingsItem label="Export Hideouts" value={opts.includeHideouts}
                                        onClick={this.handleSettingsSwitch('includeHideouts')}/>
                    <ExportSettingsItem label="Export In-Progress Incursions" value={opts.includeInProgressIncursions}
                                        onClick={this.handleSettingsSwitch('includeInProgressIncursions')}/>
                    <ExportSettingsItem label="Export Completed Incursions" value={opts.includeCompletedIncursions}
                                        onClick={this.handleSettingsSwitch('includeCompletedIncursions')}/>
                </List>
            </div>
        );
    }
}

export default withStyles(styles)(ExportSettings);
