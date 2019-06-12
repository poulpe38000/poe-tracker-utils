import React from "react";
import Container from '@material-ui/core/Container';

import {ImportExportTabContent, ImportExportTabs} from 'components/ImportExport';

class ImportExportPage extends React.Component {
    state = {
        value: 0,
    };
    tabs = [
        {label: 'Import Data'},
        {label: 'Export Data'},
    ];

    handleTabChange = (event, value) => {
        this.setState({
            value: value
        });
    };

    render() {
        const {value} = this.state;
        return (
            <Container maxWidth="lg">
                <ImportExportTabs tabs={this.tabs} value={value} onChange={this.handleTabChange}/>
                <ImportExportTabContent value={value}/>
            </Container>
        );
    }
}

export default ImportExportPage;