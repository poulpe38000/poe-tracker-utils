import React from 'react';

import HomePage from 'components/pages/Home/HomePage';
import HideoutPage from 'components/pages/Hideout/HideoutPage';
import IncursionPage from 'components/pages/Incursion/IncursionPage';
import ImportExportPage from 'components/pages/ImportExport/ImportExportPage';
import NotFoundPage from 'components/pages/NotFound/NotFoundPage';
import AppToolbar from 'components/layout/components/TopBar/AppToolbar';
import HideoutToolbar from 'components/pages/Hideout/Toolbar/HideoutToolbar';
import IncursionToolbar from 'components/pages/Incursion/Toolbar/IncursionToolbar';
import SettingsPage from 'components/pages/Settings/SettingsPage';

const routes = {
    root: '/',
    hideouts: '/hideouts',
    incursions: '/incursions',
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
        import_export: {to: routes.import_export},
        settings: {to: routes.settings},
    },
};

export default ROUTES;