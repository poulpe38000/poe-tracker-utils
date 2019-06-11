import React from "react";
import {Page} from 'components/layout/Page';
import Container from '@material-ui/core/Container';

const HomePage: React.FunctionComponent<{}> = () => (
    <Container>
        <Page title={'Welcome to PoE Tracker Utils'}/>
    </Container>
);

export default HomePage;