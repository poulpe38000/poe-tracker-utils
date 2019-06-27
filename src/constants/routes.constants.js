import React from 'react';

import {HideoutsPage, HomePage, ImportExportPage, IncursionsPage, NotFoundPage, SettingsPage} from 'pages';
import HideoutToolbar from 'components/Hideout/Toolbar/HideoutToolbar';
import IncursionToolbar from 'components/Incursion/Toolbar/IncursionToolbar';
import AppToolbar from 'layout/TopBarComponents/AppToolbar';

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
            route: {path: routes.hideouts, component: HideoutsPage},
            toolbar: (<HideoutToolbar title={'Hideouts unlocks'}/>),
        },
        {
            route: {path: routes.incursions, component: IncursionsPage},
            toolbar: (<IncursionToolbar title={'Incursion rooms'}/>),
        },
        // {
        //     route: {path: routes.filters, component: FilterReaderPage},
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