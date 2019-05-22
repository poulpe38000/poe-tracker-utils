import INITIAL_STATE from 'store/main/state';
import {TOGGLE_DRAWER, TOGGLE_EXPORT_DIALOG, TOGGLE_IMPORT_DIALOG} from 'store/main/actions';

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
            };
        case TOGGLE_EXPORT_DIALOG:
            return {
                ...state,
                showImportDialog: false,
                showExportDialog: action.payload,
            };
        default :
            return state;
    }
}

export default appReducer;