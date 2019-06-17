import React from 'react'
import * as PropTypes from 'prop-types';

import ImportExportSettingsItem from 'components/ImportExport/Settings/ImportExportSettingsItem';
import ImportExportSettingsPanel from 'components/ImportExport/Settings/ImportExportSettingsPanel';


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
            <ImportExportSettingsPanel title={'Export settings'} subtitle={subtitle}>
                <ImportExportSettingsItem label="Export Hideouts"
                                          value={includeHideouts}
                                          onClick={this.handleSettingsSwitch('includeHideouts')}/>
                <ImportExportSettingsItem label="Export In-Progress Incursions"
                                          value={includeInProgressIncursions}
                                          onClick={this.handleSettingsSwitch('includeInProgressIncursions')}/>
                <ImportExportSettingsItem label="Export Completed Incursions"
                                          value={includeCompletedIncursions}
                                          onClick={this.handleSettingsSwitch('includeCompletedIncursions')}/>
            </ImportExportSettingsPanel>
        );
    }
}

export default ExportSettings;
