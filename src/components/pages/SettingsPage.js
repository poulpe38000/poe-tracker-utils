import React from "react";
import {SettingsData, SettingsApp} from 'components/Settings';
import {Page} from 'components/pages/layout/Page';

class SettingsPage extends React.Component {
    render() {
        return (
            <Page>
                <SettingsApp/>
                <SettingsData/>
            </Page>
        );
    }
}

export default SettingsPage;