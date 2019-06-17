import React from 'react'
import * as PropTypes from 'prop-types';

import SettingsItem from 'components/ImportExport/Settings/SettingsItem';
import SettingsPanel from 'components/ImportExport/Settings/SettingsPanel';


class ExportSettings extends React.Component {
    static propTypes = {
        opts: PropTypes.shape({
            includeHideouts: PropTypes.bool,
            includeInProgressIncursions: PropTypes.bool,
            includeCompletedIncursions: PropTypes.bool,
        }).isRequired,
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

    getSubtitle() {
        const {includeHideouts, includeInProgressIncursions, includeCompletedIncursions} = this.props.opts;
        if (!(includeHideouts || includeInProgressIncursions || includeCompletedIncursions)) {
            return 'No data export selected'
        }
        if (includeHideouts && includeInProgressIncursions && includeCompletedIncursions) {
            return 'Export complete tracker data'
        }
        return 'Partial data export';
    }

    render() {
        const {includeHideouts, includeInProgressIncursions, includeCompletedIncursions} = this.props.opts;
        const subtitle = this.getSubtitle();
        return (
            <SettingsPanel title={'Export settings'} subtitle={subtitle}>
                <SettingsItem label="Export Hideouts"
                              value={includeHideouts}
                              onClick={this.handleSettingsSwitch('includeHideouts')}/>
                <SettingsItem label="Export In-Progress Incursions"
                              value={includeInProgressIncursions}
                              onClick={this.handleSettingsSwitch('includeInProgressIncursions')}/>
                <SettingsItem label="Export Completed Incursions"
                              value={includeCompletedIncursions}
                              onClick={this.handleSettingsSwitch('includeCompletedIncursions')}/>
            </SettingsPanel>
        );
    }
}

export default ExportSettings;
