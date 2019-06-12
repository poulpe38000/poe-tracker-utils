export const ACTION_TYPE = {
    TOGGLE_SIDENAV: 'TOGGLE_SIDENAV',
    TOGGLE_THEME: 'TOGGLE_THEME',
    INITIALIZE_APP: 'INITIALIZE_APP',
    RESET_ALL: 'RESET_ALL',
    SET_ALL: 'SET_ALL',
    IMPORT_DATA: 'IMPORT_DATA',
};

export const rootActions = {
    toggleSidenav: () => ({type: ACTION_TYPE.TOGGLE_SIDENAV}),
    toggleTheme: () => ({type: ACTION_TYPE.TOGGLE_THEME}),
    initializeApp: () => ({type: ACTION_TYPE.INITIALIZE_APP}),
    resetAll: () => ({type: ACTION_TYPE.RESET_ALL}),
    setAll: () => ({type: ACTION_TYPE.SET_ALL}),
    importData: (payload) => ( {type: ACTION_TYPE.IMPORT_DATA, payload}),
};
