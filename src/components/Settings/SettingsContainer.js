import React from 'react';

import SettingsApp from 'components/Settings/App/SettingsApp';
import SettingsData from 'components/Settings/Data/SettingsData';

class SettingsContainer extends React.Component {

    render() {
        return (
            <React.Fragment>
                <SettingsApp/>
                <SettingsData/>
            </React.Fragment>
        );
    }
}

export default SettingsContainer;
