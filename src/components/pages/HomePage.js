import React from "react";
import {Page} from 'components/pages/layout/Page';
import Container from '@material-ui/core/Container';

class HomePage extends React.Component {
    render() {
        return (
            <Container>
                <Page title="Welcome to PoE Tracker Utils"/>
            </Container>
        );
    }
}

export default HomePage;