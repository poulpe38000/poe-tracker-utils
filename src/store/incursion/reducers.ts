import INITIAL_STATE, {IIncursionState, IIncursionStateRoom} from 'store/incursion/state';
import {
    INCURSION_RESET_COMPLETED_DATA,
    INCURSION_RESET_IN_PROGRESS_DATA,
    INCURSION_ROOM_TOGGLE_COMPLETED,
    INCURSION_ROOM_TOGGLE_IN_PROGRESS,
    INCURSION_ROOM_VALIDATE_IN_PROGRESS,
    INCURSION_UPDATE_SEARCH_TEXT
} from 'store/incursion/actions';
import {IMPORT_DATA, INITIALIZE_APP, RESET_ALL, SET_ALL} from 'store/main/actions';
import {clearObj, getObj, INCURSION_COMPLETED_STORAGE, INCURSION_IN_PROGRESS_STORAGE, setObj} from 'utils/storage';
import {importIncursionData, toggleIncursionRoom, validateInProgressIncursion} from 'store/incursion/functions';
import {AnyAction} from 'redux';


function incursionReducer(state: IIncursionState = INITIAL_STATE, action: AnyAction): IIncursionState {
    let completedRooms: IIncursionStateRoom[] = state.completed.slice();
    let inProgressRooms: IIncursionStateRoom[] = state.in_progress.slice();
    switch (action.type) {
        case INCURSION_ROOM_TOGGLE_IN_PROGRESS:
            inProgressRooms = toggleIncursionRoom(inProgressRooms, action.payload);
            return {
                ...state,
                in_progress: setObj(INCURSION_IN_PROGRESS_STORAGE, inProgressRooms),
            };
        case INCURSION_ROOM_TOGGLE_COMPLETED:
            completedRooms = toggleIncursionRoom(completedRooms, action.payload);
            return {
                ...state,
                completed: setObj(INCURSION_COMPLETED_STORAGE, completedRooms),
            };
        case INCURSION_ROOM_VALIDATE_IN_PROGRESS:
            completedRooms = validateInProgressIncursion(inProgressRooms, completedRooms);
            return {
                ...state,
                completed: setObj(INCURSION_COMPLETED_STORAGE, completedRooms),
                in_progress: clearObj<IIncursionStateRoom[]>(INCURSION_IN_PROGRESS_STORAGE, []),
            };
        case INCURSION_UPDATE_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.payload,
            };
        case INITIALIZE_APP:
            try {
                return {
                    ...state,
                    completed: getObj<IIncursionStateRoom[]>(INCURSION_COMPLETED_STORAGE, []),
                    in_progress: getObj<IIncursionStateRoom[]>(INCURSION_IN_PROGRESS_STORAGE, []),
                };
            } catch (e) {
                return {...state};
            }
        case IMPORT_DATA:
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
                completed: setObj(INCURSION_COMPLETED_STORAGE, completedRooms),
                in_progress: setObj(INCURSION_IN_PROGRESS_STORAGE, inProgressRooms),
            };
        case INCURSION_RESET_IN_PROGRESS_DATA:
            return {
                ...state,
                in_progress: clearObj<IIncursionStateRoom[]>(INCURSION_IN_PROGRESS_STORAGE, []),
            };
        case INCURSION_RESET_COMPLETED_DATA:
            return {
                ...state,
                completed: clearObj<IIncursionStateRoom[]>(INCURSION_COMPLETED_STORAGE, []),
            };
        case RESET_ALL:
            return {
                ...state,
                in_progress: clearObj<IIncursionStateRoom[]>(INCURSION_IN_PROGRESS_STORAGE, []),
                completed: clearObj<IIncursionStateRoom[]>(INCURSION_COMPLETED_STORAGE, []),
            };
        case SET_ALL:
            return {
                ...state,
                in_progress: setObj(INCURSION_IN_PROGRESS_STORAGE, state.in_progress),
                completed: setObj(INCURSION_COMPLETED_STORAGE, state.completed),
            };
        default :
            return state;
    }
}

export default incursionReducer;