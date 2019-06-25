import React from 'react';

import Page from 'layout/Page';
import {SettingsContainer} from 'components/Settings';

export default function SettingsPage() {
    return (
        <Page maxWidth="md">
            <SettingsContainer/>
        </Page>
    );
}