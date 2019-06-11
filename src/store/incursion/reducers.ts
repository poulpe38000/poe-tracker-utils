import {IIncursionState} from 'store/incursion/state';
import {ACTION_TYPE as INCURSION_ACTION,} from 'store/incursion/actions';
import {ACTION_TYPE as ROOT_ACTION} from 'store/actions';
import {clearObj, getObj, INCURSION_COMPLETED_STORAGE, INCURSION_IN_PROGRESS_STORAGE, setObj} from 'utils/storage';
import {importIncursionData, toggleIncursionRoom, validateInProgressIncursion} from 'store/incursion/functions';
import {AnyAction} from 'redux';
import {INITIAL_STATE} from 'store/state';
import {IIncursionRoom} from 'interfaces/incursion';


function incursionReducer(state: IIncursionState = INITIAL_STATE.incursion, action: AnyAction): IIncursionState {
    let completedRooms: IIncursionRoom[] = state.completed.slice();
    let inProgressRooms: IIncursionRoom[] = state.in_progress.slice();
    switch (action.type) {
        case INCURSION_ACTION.TOGGLE_IN_PROGRESS:
            inProgressRooms = toggleIncursionRoom(inProgressRooms, action.payload);
            return {
                ...state,
                in_progress: setObj(INCURSION_IN_PROGRESS_STORAGE, inProgressRooms),
            };
        case INCURSION_ACTION.TOGGLE_COMPLETED:
            completedRooms = toggleIncursionRoom(completedRooms, action.payload);
            return {
                ...state,
                completed: setObj(INCURSION_COMPLETED_STORAGE, completedRooms),
            };
        case INCURSION_ACTION.VALIDATE_IN_PROGRESS:
            completedRooms = validateInProgressIncursion(inProgressRooms, completedRooms);
            return {
                ...state,
                completed: setObj(INCURSION_COMPLETED_STORAGE, completedRooms),
                in_progress: clearObj<IIncursionRoom[]>(INCURSION_IN_PROGRESS_STORAGE, []),
            };
        case INCURSION_ACTION.UPDATE_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.payload,
            };
        case ROOT_ACTION.INITIALIZE_APP:
            try {
                return {
                    ...state,
                    completed: getObj<IIncursionRoom[]>(INCURSION_COMPLETED_STORAGE, []),
                    in_progress: getObj<IIncursionRoom[]>(INCURSION_IN_PROGRESS_STORAGE, []),
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
                completed: setObj(INCURSION_COMPLETED_STORAGE, completedRooms),
                in_progress: setObj(INCURSION_IN_PROGRESS_STORAGE, inProgressRooms),
            };
        case INCURSION_ACTION.RESET_IN_PROGRESS_DATA:
            return {
                ...state,
                in_progress: clearObj<IIncursionRoom[]>(INCURSION_IN_PROGRESS_STORAGE, []),
            };
        case INCURSION_ACTION.RESET_COMPLETED_DATA:
            return {
                ...state,
                completed: clearObj<IIncursionRoom[]>(INCURSION_COMPLETED_STORAGE, []),
            };
        case ROOT_ACTION.RESET_ALL:
            return {
                ...state,
                in_progress: clearObj<IIncursionRoom[]>(INCURSION_IN_PROGRESS_STORAGE, []),
                completed: clearObj<IIncursionRoom[]>(INCURSION_COMPLETED_STORAGE, []),
            };
        case ROOT_ACTION.SET_ALL:
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