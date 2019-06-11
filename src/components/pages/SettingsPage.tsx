import React from "react";
import {SettingsData, SettingsApp} from 'components/Settings';
import {Page} from 'components/layout/Page';
import Container from '@material-ui/core/Container';

const SettingsPage: React.FunctionComponent<{}> = () => (
    <Container maxWidth="md">
        <Page>
            <SettingsApp/>
            <SettingsData/>
        </Page>
    </Container>
);

export default SettingsPage;