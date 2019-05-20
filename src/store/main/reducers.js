import INITIAL_STATE from 'store/main/state';
import {TOGGLE_DRAWER, TOGGLE_EXPORT_DIALOG, TOGGLE_IMPORT_DIALOG, TOGGLE_SETTINGS_DIALOG} from 'store/main/actions';

function appReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case TOGGLE_DRAWER:
            return {
                ...state,
                showDrawer: action.payload
            };
        case TOGGLE_IMPORT_DIALOG:
            return {
                ...state,
                showImportDialog: action.payload,
                showExportDialog: false,
                showSettingsDialog: false,
            };
        case TOGGLE_EXPORT_DIALOG:
            return {
                ...state,
                showImportDialog: false,
                showExportDialog: action.payload,
                showSettingsDialog: false,
            };
        case TOGGLE_SETTINGS_DIALOG:
            return {
                ...state,
                showImportDialog: false,
                showExportDialog: false,
                showSettingsDialog: action.payload,
            };
        default :
            return state;
    }
}

export default appReducer;