import {ACTION_TYPE as INCURSION_ACTION} from 'store/incursion/actions';
import {ACTION_TYPE as ROOT_ACTION} from 'store/root/actions';
import {clearObj, getObj, setObj, STORAGE_KEYS} from 'utils/storage';
import {importIncursionData, toggleIncursionRoom, validateInProgressIncursion} from 'store/incursion/functions';
import INITIAL_STATE from 'store/root/state';


function incursionReducer(state = INITIAL_STATE.incursion, action) {
    let completedRooms = state.completed.slice();
    let inProgressRooms = state.in_progress.slice();
    switch (action.type) {
        case INCURSION_ACTION.TOGGLE_IN_PROGRESS:
            inProgressRooms = toggleIncursionRoom(inProgressRooms, action.payload);
            return {
                ...state,
                in_progress: setObj(STORAGE_KEYS.INCURSION_IN_PROGRESS_STORAGE, inProgressRooms),
            };
        case INCURSION_ACTION.TOGGLE_COMPLETED:
            completedRooms = toggleIncursionRoom(completedRooms, action.payload);
            return {
                ...state,
                completed: setObj(STORAGE_KEYS.INCURSION_COMPLETED_STORAGE, completedRooms),
            };
        case INCURSION_ACTION.VALIDATE_IN_PROGRESS:
            completedRooms = validateInProgressIncursion(inProgressRooms, completedRooms);
            return {
                ...state,
                completed: setObj(STORAGE_KEYS.INCURSION_COMPLETED_STORAGE, completedRooms),
                in_progress: clearObj(STORAGE_KEYS.INCURSION_IN_PROGRESS_STORAGE, []),
            };
        case INCURSION_ACTION.UPDATE_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.payload,
            };
        case INCURSION_ACTION.RESET_IN_PROGRESS_DATA:
            return {
                ...state,
                in_progress: clearObj(STORAGE_KEYS.INCURSION_IN_PROGRESS_STORAGE, []),
            };
        case INCURSION_ACTION.RESET_COMPLETED_DATA:
            return {
                ...state,
                completed: clearObj(STORAGE_KEYS.INCURSION_COMPLETED_STORAGE, []),
            };
        case ROOT_ACTION.RESET_ALL:
            return {
                ...state,
                in_progress: clearObj(STORAGE_KEYS.INCURSION_IN_PROGRESS_STORAGE, []),
                completed: clearObj(STORAGE_KEYS.INCURSION_COMPLETED_STORAGE, []),
            };
        case ROOT_ACTION.SET_ALL:
            return {
                ...state,
                in_progress: setObj(STORAGE_KEYS.INCURSION_IN_PROGRESS_STORAGE, state.in_progress),
                completed: setObj(STORAGE_KEYS.INCURSION_COMPLETED_STORAGE, state.completed),
            };
        case ROOT_ACTION.INITIALIZE_APP:
            try {
                return {
                    ...state,
                    completed: getObj(STORAGE_KEYS.INCURSION_COMPLETED_STORAGE, []),
                    in_progress: getObj(STORAGE_KEYS.INCURSION_IN_PROGRESS_STORAGE, []),
                };
            } catch (e) {
                return {...state};
            }
        case ROOT_ACTION.IMPORT_DATA:
            completedRooms = importIncursionData(completedRooms, action.payload.data, action.payload.opts, {
                ignoreKey: 'ignoreCompletedIncursions',
                dataKey: 'completed'
            });
            inProgressRooms = importIncursionData(inProgressRooms, action.payload.data, action.payload.opts, {
                ignoreKey: 'ignoreInProgressIncursions',
                dataKey: 'in_progress'
            });
            return {
                ...state,
                completed: setObj(STORAGE_KEYS.INCURSION_COMPLETED_STORAGE, completedRooms),
                in_progress: setObj(STORAGE_KEYS.INCURSION_IN_PROGRESS_STORAGE, inProgressRooms),
            };
        default :
            return state;
    }
}

export default incursionReducer;