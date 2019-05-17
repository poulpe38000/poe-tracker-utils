import React from 'react';
import {ImportData} from 'components/ImportData';
import {ExportData} from 'components/ExportData';
import {Settings} from 'components/Settings';

function TopBarActions() {
    return (
        <React.Fragment>
            <ImportData/>
            <ExportData/>
            <Settings/>
        </React.Fragment>
    );
}

export default TopBarActions;