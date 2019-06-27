import {HideoutsPage, HomePage, ImportExportPage, IncursionsPage, NotFoundPage, SettingsPage} from 'pages';
import HideoutToolbar from 'components/Hideout/Toolbar/HideoutToolbar';
import IncursionToolbar from 'components/Incursion/Toolbar/IncursionToolbar';

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
            toolbar: HideoutToolbar,
            toolbarProps: {title: 'Hideouts unlocks'},
        },
        {
            route: {path: routes.incursions, component: IncursionsPage},
            toolbar: IncursionToolbar,
            toolbarProps: {title: 'Incursion rooms'},
        },
        // {
        //     route: {path: routes.filters, component: FilterReaderPage},
        //     toolbarProps: {title: 'Filter reader'},
        // },
        {
            route: {path: routes.import_export, component: ImportExportPage},
            toolbarProps: {title: 'Import / Export'},
        },
        {
            route: {path: routes.settings, component: SettingsPage},
            toolbarProps: {title: 'Settings'},
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