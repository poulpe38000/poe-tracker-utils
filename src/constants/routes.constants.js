import {
    FilterEditorPage,
    HideoutsPage,
    HomePage,
    ImportExportPage,
    IncursionsPage,
    NotFoundPage,
    SettingsPage
} from 'pages';

const routes = {
    root: '/',
    hideouts: {
        root: '/hideouts',
    },
    incursions: {
        root: '/incursions',
    },
    filters: {
        root: '/filters',
    },
    import_export: {
        root: '/import-export',
    },
    settings: {
        root: '/settings',
    },
};

const ROUTES = {
    root: routes.root,
    routes: [
        {route: {path: routes.root, component: HomePage, exact: true}},
        {
            route: {path: routes.hideouts.root, component: HideoutsPage},
            // toolbar: HideoutToolbar,
            toolbarProps: {title: 'Hideouts unlocks'},
        },
        {
            route: {path: routes.incursions.root, component: IncursionsPage},
            // toolbar: IncursionToolbar,,
            toolbarProps: {title: 'Incursion rooms'},
        },
        {
            route: {path: routes.filters.root, component: FilterEditorPage},
            toolbarProps: {title: 'Filter editor'},
        },
        {
            route: {path: routes.import_export.root, component: ImportExportPage},
            toolbarProps: {title: 'Import / Export'},
        },
        {
            route: {path: routes.settings.root, component: SettingsPage},
            toolbarProps: {title: 'Settings'},
        },
        {route: {component: NotFoundPage}},
    ],
    sideNav: {
        root: {to: routes.root, exact: true},
        hideouts: {to: routes.hideouts.root},
        incursions: {to: routes.incursions.root},
        filters: {to: routes.filters.root},
        import_export: {to: routes.import_export.root},
        settings: {to: routes.settings.root},
    },
};

export default ROUTES;