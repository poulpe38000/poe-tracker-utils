import React from "react";
import Container from '@material-ui/core/Container';

import Page from 'layout/Page';
import {ImportExportContainer} from 'components/ImportExport';

class ImportExportPage extends React.Component {

    render() {
        return (
            <Container maxWidth="md">
                <Page>
                    <ImportExportContainer/>
                </Page>
            </Container>
        );
    }
}

export default ImportExportPage;