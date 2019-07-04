import React from 'react';

import SettingsApp from 'components/pages/Settings/App/SettingsApp';
import SettingsData from 'components/pages/Settings/Data/SettingsData';
import Page from 'components/layout/Page';

class SettingsPage extends React.Component {

    render() {
        return (
            <Page maxWidth="md">
                <SettingsApp/>
                <SettingsData/>
            </Page>
        );
    }
}

export default SettingsPage;
