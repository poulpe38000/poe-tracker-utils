import React from 'react';
import SettingsApp from 'components/Settings/SettingsApp';
import SettingsData from 'components/Settings/SettingsData';

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
