import React from "react";
import Container from '@material-ui/core/Container';

import Page from 'layout/Page';
import {IncursionList, IncursionSummary} from 'components/Incursion';

export default function IncursionsPage() {
    return (
        <Container>
            <Page>
                <IncursionSummary title={'Incursion Tracker'}/>
                <IncursionList/>
            </Page>
        </Container>
    );
}