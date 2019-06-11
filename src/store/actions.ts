import {AnyAction} from 'redux';

export enum ACTION_TYPE {
    TOGGLE_SIDENAV = 'TOGGLE_SIDENAV',
    TOGGLE_THEME = 'TOGGLE_THEME',
    INITIALIZE_APP = 'INITIALIZE_APP',
    RESET_ALL = 'RESET_ALL',
    SET_ALL = 'SET_ALL',
    IMPORT_DATA = 'IMPORT_DATA',
}

export const rootActions = {
    toggleSidenav: (): AnyAction => ({type: ACTION_TYPE.TOGGLE_SIDENAV}),
    toggleTheme: (): AnyAction => ({type: ACTION_TYPE.TOGGLE_THEME}),
    initializeApp: (): AnyAction => ({type: ACTION_TYPE.INITIALIZE_APP}),
    resetAll: (): AnyAction => ({type: ACTION_TYPE.RESET_ALL}),
    setAll: (): AnyAction => ({type: ACTION_TYPE.SET_ALL}),
    importData: (payload: any): AnyAction => ({type: ACTION_TYPE.IMPORT_DATA, payload}),
};