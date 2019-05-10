export const TOGGLE_DRAWER = 'TOGGLE_DRAWER';
export const INITIALIZE_APP = 'INITIALIZE_APP';
export const IMPORT_DATA = 'IMPORT_DATA';

export function toggleDrawer(payload) {
    return {type: TOGGLE_DRAWER, payload};
}

export function initializeApp() {
    return {type: INITIALIZE_APP};
}

export function importData(payload) {
    return {type: IMPORT_DATA, payload};
}
