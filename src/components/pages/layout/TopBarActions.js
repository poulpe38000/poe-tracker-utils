import React from 'react';
import {ImportData} from 'components/ImportData';
import {ExportData} from 'components/ExportData';

function TopBarActions() {
    return (
        <React.Fragment>
            <ImportData/>
            <ExportData/>
        </React.Fragment>
    );
}

export default TopBarActions;