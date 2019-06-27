import React from 'react';

import HomePage from 'components/Home/HomePage';
import HideoutPage from 'components/Hideout/HideoutPage';
import IncursionPage from 'components/Incursion/IncursionPage';
import ImportExportPage from 'components/ImportExport/ImportExportPage';
import NotFoundPage from 'components/NotFound/NotFoundPage';
import AppToolbar from 'components/layout/components/TopBar/AppToolbar';
import HideoutToolbar from 'components/Hideout/Toolbar/HideoutToolbar';
import IncursionToolbar from 'components/Incursion/Toolbar/IncursionToolbar';
import SettingsPage from 'components/Settings/SettingsPage';

const routes = {
    root: '/',
    hideouts: '/hideouts',
    incursions: '/incursions',
    filters: '/filters',
    import_export: '/import-export',
    settings: '/settings',
};

const ROUTES = {
    root: routes.root,
    routes: [
        {
            route: {path: routes.root, component: HomePage, exact: true},
        },
        {
            route: {path: routes.hideouts, component: HideoutPage},
            toolbar: (<HideoutToolbar title={'Hideouts unlocks'}/>),
        },
        {
            route: {path: routes.incursions, component: IncursionPage},
            toolbar: (<IncursionToolbar title={'Incursion rooms'}/>),
        },
        // {
        //     route: {path: routes.filters, component: FilterPage},
        //     toolbar: (<AppToolbar title={'Filter reader'}/>),
        // },
        {
            route: {path: routes.import_export, component: ImportExportPage},
            toolbar: (<AppToolbar title={'Import / Export'}/>),
        },
        {
            route: {path: routes.settings, component: SettingsPage},
            toolbar: (<AppToolbar title={'Settings'}/>),
        },
        {
            route: {component: NotFoundPage},
        },
    ],
    sideNav: {
        root: {to: routes.root, exact: true},
        hideouts: {to: routes.hideouts},
        incursions: {to: routes.incursions},
        // filters: {to: routes.filters},
        import_export: {to: routes.import_export},
        settings: {to: routes.settings},
    },
};

export default ROUTES;