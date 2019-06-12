import React from "react";
import Container from '@material-ui/core/Container';

import {Page} from 'components/layout/Page';
import {SettingsApp, SettingsData} from 'components/Settings';

export default function SettingsPage() {
    return (
        <Container maxWidth="md">
            <Page>
                <SettingsApp/>
                <SettingsData/>
            </Page>
        </Container>
    );
}