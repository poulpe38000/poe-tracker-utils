export const SET_LOADING = 'SET_LOADING';
export const TOGGLE_SIDENAV = 'TOGGLE_SIDENAV';
export const TOGGLE_IMPORT_DIALOG = 'TOGGLE_IMPORT_DIALOG';
export const TOGGLE_EXPORT_DIALOG = 'TOGGLE_EXPORT_DIALOG';
export const INITIALIZE_APP = 'INITIALIZE_APP';
export const RESET_ALL = 'RESET_ALL';
export const SET_ALL = 'SET_ALL';
export const IMPORT_DATA = 'IMPORT_DATA';

export function toggleSidenav() {
    return {type: TOGGLE_SIDENAV};
}

export function setLoading(payload) {
    return {type: SET_LOADING, payload};
}

export function toggleImportDialog(payload) {
    return {type: TOGGLE_IMPORT_DIALOG, payload};
}
export function toggleExportDialog(payload) {
    return {type: TOGGLE_EXPORT_DIALOG, payload};
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
