import React from "react";
import {SettingsData, SettingsApp} from 'components/Settings';
import {Page} from 'components/pages/layout/Page';
import Container from '@material-ui/core/Container';

class SettingsPage extends React.Component {
    render() {
        return (
            <Container maxWidth="md">
                <Page>
                    <SettingsApp/>
                    <SettingsData/>
                </Page>
            </Container>
        );
    }
}

export default SettingsPage;