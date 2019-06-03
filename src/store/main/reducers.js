import INITIAL_STATE from 'store/main/state';
import {TOGGLE_SIDENAV, TOGGLE_EXPORT_DIALOG, TOGGLE_IMPORT_DIALOG, SET_LOADING} from 'store/main/actions';

function mainReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };
        case TOGGLE_SIDENAV:
            return {
                ...state,
                sidenavExpanded: !state.sidenavExpanded,
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

export default mainReducer;