import React from "react";
import {Page} from 'components/pages/layout/Page';
import {IncursionList} from 'components/Incursion';
import Container from '@material-ui/core/Container';

class IncursionsPage extends React.Component {
    render() {
        return (
            <Container>
                <Page>
                    <IncursionList/>
                </Page>
            </Container>
        );
    }
}

export default IncursionsPage;