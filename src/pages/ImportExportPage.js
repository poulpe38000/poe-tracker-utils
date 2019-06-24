import React from "react";

import Page from 'layout/Page';
import {ImportExportContainer} from 'components/ImportExport';

class ImportExportPage extends React.Component {

    render() {
        return (
            <Page maxWidth="md">
                <ImportExportContainer/>
            </Page>
        );
    }
}

export default ImportExportPage;