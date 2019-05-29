import React from "react";
import {SettingsData, SettingsStorage} from 'components/Settings';
import {Page} from 'components/pages/layout/Page';

class SettingsPage extends React.Component {
    render() {
        return (
            <Page>
                <SettingsStorage/>
                <SettingsData/>
            </Page>
        );
    }
}

export default SettingsPage;