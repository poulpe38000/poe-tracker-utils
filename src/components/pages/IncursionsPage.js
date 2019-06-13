import React from "react";
import Container from '@material-ui/core/Container';

import Page from 'components/layout/Page';
import {IncursionBaseList, IncursionSummary, IncursionTieredList} from 'components/Incursion';

export default function IncursionsPage() {
    return (
        <Container>
            <Page>
                <IncursionSummary title={'Incursion Tracker'}/>
                <IncursionBaseList/>
                <IncursionTieredList/>
            </Page>
        </Container>
    );
}