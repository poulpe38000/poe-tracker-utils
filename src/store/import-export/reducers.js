import INITIAL_STATE from 'store/import-export/state';
import {IMPORT_UPDATE_TEXT_DATA, TOGGLE_EXPORT_DIALOG, TOGGLE_IMPORT_DIALOG} from 'store/import-export/actions';
import {IMPORT_DATA} from 'store/actions';

function importExportReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
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
        case IMPORT_UPDATE_TEXT_DATA:
            return {
                ...state,
                importTextData: action.payload
            };
        case IMPORT_DATA:
            return {
                ...state,
                importTextData: ''
            };
        default :
            return state;
    }
}

export default importExportReducer;