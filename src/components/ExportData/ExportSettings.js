import React from 'react'
import {withStyles} from '@material-ui/core';
import * as PropTypes from 'prop-types';
import {ExportSettingsItem} from 'components/ExportData';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'stretch',
        },
    },
});

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
                <ExportSettingsItem label="Export Hideouts" value={opts.includeHideouts}
                                    onClick={this.handleSettingsSwitch('includeHideouts')}/>
                <ExportSettingsItem label="Export In-Progress Incursions" value={opts.includeInProgressIncursions}
                                    onClick={this.handleSettingsSwitch('includeInProgressIncursions')}/>
                <ExportSettingsItem label="Export Completed Incursions" value={opts.includeCompletedIncursions}
                                    onClick={this.handleSettingsSwitch('includeCompletedIncursions')}/>
            </div>
        );
    }
}

export default withStyles(styles)(ExportSettings);
