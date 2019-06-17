import React from "react";
import Container from '@material-ui/core/Container';

import Page from 'layout/Page';
import {IncursionContainer} from 'components/Incursion';

export default function IncursionsPage() {
    return (
        <Container>
            <Page>
                <IncursionContainer/>
            </Page>
        </Container>
    );
}