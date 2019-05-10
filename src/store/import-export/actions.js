export const TOGGLE_IMPORT_DIALOG = 'TOGGLE_IMPORT_DIALOG';
export const TOGGLE_EXPORT_DIALOG = 'TOGGLE_EXPORT_DIALOG';
export const IMPORT_UPDATE_TEXT_DATA = 'IMPORT_UPDATE_TEXT_DATA';

export function toggleImportDialog(payload) {
    return {type: TOGGLE_IMPORT_DIALOG, payload};
}
export function toggleExportDialog(payload) {
    return {type: TOGGLE_EXPORT_DIALOG, payload};
}
export function importUpdateTextData(payload) {
    return {type: IMPORT_UPDATE_TEXT_DATA, payload};
}
