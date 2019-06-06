import React from 'react'
import * as PropTypes from 'prop-types';
import {ImportExportSettingsItem, ImportExportSettingsPanel} from 'components/ImportExport/shared';


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
        const {opts} = this.props;
        return (
            <ImportExportSettingsPanel>
                <ImportExportSettingsItem label="Export Hideouts" value={opts.includeHideouts}
                                          onClick={this.handleSettingsSwitch('includeHideouts')}/>
                <ImportExportSettingsItem label="Export In-Progress Incursions"
                                          value={opts.includeInProgressIncursions}
                                          onClick={this.handleSettingsSwitch('includeInProgressIncursions')}/>
                <ImportExportSettingsItem label="Export Completed Incursions"
                                          value={opts.includeCompletedIncursions}
                                          onClick={this.handleSettingsSwitch('includeCompletedIncursions')}/>
            </ImportExportSettingsPanel>
        );
    }
}

export default ExportSettings;
