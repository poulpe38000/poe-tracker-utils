import React from 'react';

import {ExportPage} from 'components/pages/ImportExport/ExportData';
import {ImportPage} from 'components/pages/ImportExport/ImportData';

export const tabs = [
    {label: 'Import Data', component: <ImportPage/>},
    {label: 'Export Data', component: <ExportPage/>},
];