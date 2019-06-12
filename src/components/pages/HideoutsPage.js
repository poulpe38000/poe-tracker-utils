import React from "react";
import Container from '@material-ui/core/Container';

import {Page} from 'components/layout/Page';
import HideoutList from 'components/Hideout/HideoutList';

export default function HideoutsPage() {
    return (
        <Container>
            <Page>
                <HideoutList/>
            </Page>
        </Container>
    );
}