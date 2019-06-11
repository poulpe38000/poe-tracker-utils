import React from "react";
import {Page} from 'components/layout/Page';
import HideoutList from 'components/Hideout/HideoutList';
import Container from '@material-ui/core/Container';

const HideoutsPage: React.FunctionComponent<{}> = () => (
    <Container>
        <Page>
            <HideoutList/>
        </Page>
    </Container>
);

export default HideoutsPage;