import React from "react";
import {Page} from 'components/pages/layout/Page';
import {IncursionBaseList, IncursionSummary, IncursionTieredList} from 'components/Incursion';
import Container from '@material-ui/core/Container';

class IncursionsPage extends React.Component {
    render() {
        return (
            <Container>
                <Page>
                    <IncursionSummary/>
                    <IncursionBaseList/>
                    <IncursionTieredList/>
                </Page>
            </Container>
        );
    }
}

export default IncursionsPage;