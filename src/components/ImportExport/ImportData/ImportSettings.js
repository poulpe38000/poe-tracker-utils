import React from 'react'
import {withStyles} from '@material-ui/core';
import * as PropTypes from 'prop-types';
import {ImportExportSettingsItem} from 'components/ImportExport';

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
                <ImportExportSettingsItem label="Import Hideouts" value={!opts.ignoreHideouts}
                                    onClick={this.handleSettingsSwitch('ignoreHideouts')}/>
                <ImportExportSettingsItem label="Import In-Progress Incursions" value={!opts.ignoreInProgressIncursions}
                                    onClick={this.handleSettingsSwitch('ignoreInProgressIncursions')}/>
                <ImportExportSettingsItem label="Import Completed Incursions" value={!opts.ignoreCompletedIncursions}
                                    onClick={this.handleSettingsSwitch('ignoreCompletedIncursions')}/>
            </div>
        );
    }
}

export default withStyles(styles)(ImportSettings);