import React from 'react'
import * as PropTypes from 'prop-types';

import ImportExportSettingsItem from 'components/ImportExport/shared/ImportExportSettingsItem';
import ImportExportSettingsPanel from 'components/ImportExport/shared/ImportExportSettingsPanel';

class ImportSettings extends React.Component {
    static propTypes = {
        opts: PropTypes.shape({
            ignoreHideouts: PropTypes.bool,
            ignoreInProgressIncursions: PropTypes.bool,
            ignoreCompletedIncursions: PropTypes.bool,
        }).isRequired,
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

    getSubtitle() {
        const {ignoreHideouts, ignoreInProgressIncursions, ignoreCompletedIncursions} = this.props.opts;
        if (!(ignoreHideouts || ignoreInProgressIncursions || ignoreCompletedIncursions)) {
            return 'Overwrite all existing tracker data'
        }
        if (ignoreHideouts && ignoreInProgressIncursions && ignoreCompletedIncursions) {
            return 'No data import selected'
        }
        return 'Partial data import';
    }

    render() {
        const {ignoreHideouts, ignoreInProgressIncursions, ignoreCompletedIncursions} = this.props.opts;
        const subtitle = this.getSubtitle();
        return (
            <ImportExportSettingsPanel title={'Import settings'} subtitle={subtitle}>
                <ImportExportSettingsItem label="Import Hideouts"
                                          value={!ignoreHideouts}
                                          onClick={this.handleSettingsSwitch('ignoreHideouts')}/>
                <ImportExportSettingsItem label="Import In-Progress Incursions"
                                          value={!ignoreInProgressIncursions}
                                          onClick={this.handleSettingsSwitch('ignoreInProgressIncursions')}/>
                <ImportExportSettingsItem label="Import Completed Incursions"
                                          value={!ignoreCompletedIncursions}
                                          onClick={this.handleSettingsSwitch('ignoreCompletedIncursions')}/>
            </ImportExportSettingsPanel>
        );
    }
}

export default ImportSettings;
