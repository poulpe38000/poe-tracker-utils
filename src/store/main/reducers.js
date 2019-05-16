import INITIAL_STATE from 'store/main/state';
import {TOGGLE_DRAWER, TOGGLE_SETTINGS_DIALOG} from 'store/main/actions';

function appReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case TOGGLE_DRAWER:
            return {
                ...state,
                showDrawer: action.payload
            };
        case TOGGLE_SETTINGS_DIALOG:
            return {
                ...state,
                showSettingsDialog: action.payload
            };
        default :
            return state;
    }
}

export default appReducer;