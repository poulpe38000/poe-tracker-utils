import React from "react";
import {Page} from 'components/pages/layout/Page';
import HideoutList from 'components/Hideout/HideoutList';
import Container from '@material-ui/core/Container';

export default function HideoutsPage() {
    return (
        <Container>
            <Page>
                <HideoutList/>
            </Page>
        </Container>
    );
}