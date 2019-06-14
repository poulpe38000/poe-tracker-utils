import React from 'react';

import {ExportPage} from 'components/ImportExport/ExportData';
import {ImportPage} from 'components/ImportExport/ImportData';

export const tabs = [
    {label: 'Import Data', hash: 'import', component: <ImportPage/>},
    {label: 'Export Data', hash: 'export', component: <ExportPage/>},
];