import React from 'react';

import ExportPage from 'components/pages/ImportExport/Export/ExportPage';
import ImportPage from 'components/pages/ImportExport/Import/ImportPage';

export const tabs = [
    {id: 0, label: 'Import Data', component: <ImportPage/>},
    {id: 1, label: 'Export Data', component: <ExportPage/>},
];