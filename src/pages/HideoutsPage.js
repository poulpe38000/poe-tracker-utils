import React from "react";
import Container from '@material-ui/core/Container';

import Page from 'layout/Page';
import {HideoutContainer} from 'components/Hideout';

export default function HideoutsPage() {
    return (
        <Container>
            <Page>
                <HideoutContainer/>
            </Page>
        </Container>
    );
}