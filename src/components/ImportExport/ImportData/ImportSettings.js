import React from 'react'
import * as PropTypes from 'prop-types';

import ImportExportSettingsItem from 'components/ImportExport/shared/ImportExportSettingsItem';
import ImportExportSettingsPanel from 'components/ImportExport/shared/ImportExportSettingsPanel';

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
        const {opts} = this.props;
        return (
            <ImportExportSettingsPanel>
                <ImportExportSettingsItem label="Import Hideouts" value={!opts.ignoreHideouts}
                                          onClick={this.handleSettingsSwitch('ignoreHideouts')}/>
                <ImportExportSettingsItem label="Import In-Progress Incursions"
                                          value={!opts.ignoreInProgressIncursions}
                                          onClick={this.handleSettingsSwitch('ignoreInProgressIncursions')}/>
                <ImportExportSettingsItem label="Import Completed Incursions"
                                          value={!opts.ignoreCompletedIncursions}
                                          onClick={this.handleSettingsSwitch('ignoreCompletedIncursions')}/>
            </ImportExportSettingsPanel>
        );
    }
}

export default ImportSettings;
