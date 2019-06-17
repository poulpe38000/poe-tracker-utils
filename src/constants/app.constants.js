const APP_CONSTANTS = {
    basename: process.env.PUBLIC_URL,
    title: 'PoE Tracker Utils',
    drawerWidth: 240,
    routes: {
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
    }
};

export default APP_CONSTANTS;