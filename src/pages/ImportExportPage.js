import React from "react";
import Container from '@material-ui/core/Container';

import {ImportExportTabContent, ImportExportTabs} from 'components/ImportExport';
import {tabs} from 'components/ImportExport/constants';

class ImportExportPage extends React.Component {
    state = {
        value: tabs[0].hash,
    };

    handleTabChange = (event, value) => {
        this.setState({
            value: value
        });
    };

    render() {
        const {value} = this.state;
        return (
            <Container maxWidth="lg">
                <ImportExportTabs value={value} onChange={this.handleTabChange}/>
                <ImportExportTabContent value={value}/>
            </Container>
        );
    }
}

export default ImportExportPage;