export const TOGGLE_SIDENAV = 'TOGGLE_SIDENAV';
export const TOGGLE_THEME = 'TOGGLE_THEME';
export const INITIALIZE_APP = 'INITIALIZE_APP';
export const RESET_ALL = 'RESET_ALL';
export const SET_ALL = 'SET_ALL';
export const IMPORT_DATA = 'IMPORT_DATA';

export function toggleSidenav() {
    return {type: TOGGLE_SIDENAV};
}

export function toggleTheme() {
    return {type: TOGGLE_THEME};
}

export function initializeApp() {
    return {type: INITIALIZE_APP};
}

export function resetAll() {
    return {type: RESET_ALL};
}

export function setAll() {
    return {type: SET_ALL};
}

export function importData(payload) {
    return {type: IMPORT_DATA, payload};
}
