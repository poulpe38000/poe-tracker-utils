import React from "react";
import {Page} from 'components/pages/layout/Page';
import {IncursionBaseList, IncursionSummary, IncursionTieredList} from 'components/Incursion';
import Container from '@material-ui/core/Container';

export default function IncursionsPage() {
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