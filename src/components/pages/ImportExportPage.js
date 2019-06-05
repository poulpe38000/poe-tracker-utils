import React from "react";
import {ImportExportTabContent, ImportExportTabs} from 'components/ImportExport';

class ImportExportPage extends React.Component {
    state = {
        value: 0,
        tabs: [
            {label: 'Import Data'},
            {label: 'Export Data'},
        ]
    };

    handleTabChange = (event, value) => {
        this.setState({
            value: value
        });
    };

    render() {
        const {value, tabs} = this.state;
        return (
            <React.Fragment>
                <ImportExportTabs tabs={tabs} value={value} onChange={this.handleTabChange}/>
                <ImportExportTabContent value={value}/>
            </React.Fragment>
        );
    }
}

export default ImportExportPage;