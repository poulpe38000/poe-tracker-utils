import {AnyAction} from 'redux';

export const TOGGLE_SIDENAV = 'TOGGLE_SIDENAV';
export const TOGGLE_THEME = 'TOGGLE_THEME';
export const INITIALIZE_APP = 'INITIALIZE_APP';
export const RESET_ALL = 'RESET_ALL';
export const SET_ALL = 'SET_ALL';
export const IMPORT_DATA = 'IMPORT_DATA';

export function toggleSidenav(): AnyAction {
    return {type: TOGGLE_SIDENAV};
}

export function toggleTheme(): AnyAction {
    return {type: TOGGLE_THEME};
}

export function initializeApp(): AnyAction {
    return {type: INITIALIZE_APP};
}

export function resetAll(): AnyAction {
    return {type: RESET_ALL};
}

export function setAll(): AnyAction {
    return {type: SET_ALL};
}

export function importData(payload: any): AnyAction {
    return {type: IMPORT_DATA, payload};
}
