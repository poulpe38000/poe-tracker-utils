import React from "react";
import {SettingsApp, SettingsData} from 'components/Settings';
import {Page} from 'components/pages/layout/Page';
import Container from '@material-ui/core/Container';

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