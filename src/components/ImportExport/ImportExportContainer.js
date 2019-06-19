import React from 'react';
import Paper from '@material-ui/core/Paper';

import TabContent from 'components/ImportExport/Tabs/TabContent';
import TabHeader from 'components/ImportExport/Tabs/TabHeader';

class ImportExportContainer extends React.Component {
    state = {
        value: 0,
    };

    handleTabChange = (event, value) => {
        this.setState({
            value: value
        });
    };

    render() {
        const {value} = this.state;
        return (
            <Paper>
                <TabHeader value={value} onChange={this.handleTabChange}/>
                <TabContent value={value} onChange={this.handleTabChange}/>
            </Paper>
        );
    }
}

export default ImportExportContainer;