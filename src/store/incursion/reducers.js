import {ACTION_TYPE as INCURSION_ACTION} from 'store/incursion/actions';
import {ACTION_TYPE as ROOT_ACTION} from 'store/root/actions';
import {
    importData,
    initializeApp,
    resetCompletedData,
    resetData,
    resetInProgressData,
    setData,
    toggleCompleted,
    toggleInProgress,
    updateSearchText,
    validateInProgress
} from 'store/incursion/functions';
import INITIAL_STATE from 'store/root/state';


function incursionReducer(state = INITIAL_STATE.incursion, action) {
    switch (action.type) {
        case INCURSION_ACTION.TOGGLE_IN_PROGRESS:
            return toggleInProgress(state, action);
        case INCURSION_ACTION.TOGGLE_COMPLETED:
            return toggleCompleted(state, action);
        case INCURSION_ACTION.VALIDATE_IN_PROGRESS:
            return validateInProgress(state);
        case INCURSION_ACTION.UPDATE_SEARCH_TEXT:
            return updateSearchText(state, action);
        case INCURSION_ACTION.RESET_IN_PROGRESS_DATA:
            return resetInProgressData(state);
        case INCURSION_ACTION.RESET_COMPLETED_DATA:
            return resetCompletedData(state);
        case ROOT_ACTION.RESET_ALL:
            return resetData(state);
        case ROOT_ACTION.SET_ALL:
            return setData(state);
        case ROOT_ACTION.INITIALIZE_APP:
            return initializeApp(state);
        case ROOT_ACTION.IMPORT_DATA:
            return importData(state, action);
        default :
            return state;
    }
}

export default incursionReducer;