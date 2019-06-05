import React from "react";
import {Page} from 'components/pages/layout/Page';
import HideoutList from 'components/Hideout/HideoutList';
import Container from '@material-ui/core/Container';

class HideoutsPage extends React.Component {
    render() {
        return (
            <Container maxWidth={false}>
                <Page>
                    <HideoutList/>
                </Page>
            </Container>
        );
    }
}

export default HideoutsPage;