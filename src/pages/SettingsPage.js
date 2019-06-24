import React from "react";

import Page from 'layout/Page';
import {SettingsApp, SettingsData} from 'components/Settings';

export default function SettingsPage() {
    return (
        <Page maxWidth="md">
            <SettingsApp/>
            <SettingsData/>
        </Page>
    );
}