import {ACTION_TYPE as HIDEOUT_ACTION} from 'store/hideout/actions';
import {ACTION_TYPE as ROOT_ACTION} from 'store/root/actions';
import {
    importData,
    initializeApp,
    resetData,
    resetFilters,
    setData,
    toggleUnlocked,
    updateFilters,
    updateSearchText
} from 'store/hideout/functions';
import INITIAL_STATE from 'store/root/state';


export default function hideoutReducer(state = INITIAL_STATE.hideout, action) {
    switch (action.type) {
        case HIDEOUT_ACTION.TOGGLE_UNLOCKED:
            return toggleUnlocked(state, action);
        case HIDEOUT_ACTION.UPDATE_SEARCH_TEXT:
            return updateSearchText(state, action);
        case HIDEOUT_ACTION.UPDATE_FILTERS:
            return updateFilters(state, action);
        case HIDEOUT_ACTION.RESET_FILTERS:
            return resetFilters(state);
        case HIDEOUT_ACTION.RESET_DATA:
        case ROOT_ACTION.RESET_ALL:
            return resetData(state);
        case ROOT_ACTION.SET_ALL:
            return setData(state);
        case ROOT_ACTION.INITIALIZE_APP:
            return initializeApp(state);
        case ROOT_ACTION.IMPORT_DATA:
            return importData(state, action);
        default:
            return state;
    }
}