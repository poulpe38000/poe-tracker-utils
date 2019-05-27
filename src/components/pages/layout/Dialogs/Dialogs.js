import React from 'react';
import {ImportDialog} from 'components/ImportData';
import {ExportDialog} from 'components/ExportData';

function Dialogs() {
    return(
        <React.Fragment>
            <ImportDialog/>
            <ExportDialog/>
        </React.Fragment>
    );
}

export default Dialogs;