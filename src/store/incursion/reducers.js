import INITIAL_STATE from 'store/incursion/state';
import {
    INCURSION_RESET_COMPLETED_DATA,
    INCURSION_RESET_IN_PROGRESS_DATA,
    INCURSION_ROOM_COMPLETED,
    INCURSION_ROOM_IN_PROGRESS,
    INCURSION_ROOM_INCOMPLETE,
    INCURSION_ROOM_NOT_IN_PROGRESS
} from 'store/incursion/actions';
import {IMPORT_DATA, INITIALIZE_APP, RESET_ALL} from 'store/main/actions';

const INCURSION_COMPLETED_STORAGE = 'incursionCompleted';
const INCURSION_IN_PROGRESS_STORAGE = 'incursionInProgress';

function incursionReducer(state = INITIAL_STATE, action) {
    let completedRooms = state.completed.slice();
    let inProgressRooms = state.in_progress.slice();
    switch (action.type) {
        case INCURSION_ROOM_COMPLETED:
            if (!completedRooms.find((room) => room.id === action.payload.id)) {
                completedRooms.push(action.payload);
            }
            localStorage.setItem(INCURSION_COMPLETED_STORAGE, JSON.stringify(completedRooms));
            return {
                ...state,
                completed: completedRooms
            };
        case INCURSION_ROOM_INCOMPLETE:
            completedRooms = state.completed.filter((room) => room.id !== action.payload.id);
            localStorage.setItem(INCURSION_COMPLETED_STORAGE, JSON.stringify(completedRooms));
            return {
                ...state,
                completed: completedRooms
            };
        case INCURSION_ROOM_IN_PROGRESS:
            if (!inProgressRooms.find((room) => room.id === action.payload.id)) {
                inProgressRooms.push(action.payload);
            }
            localStorage.setItem(INCURSION_IN_PROGRESS_STORAGE, JSON.stringify(inProgressRooms));
            return {
                ...state,
                in_progress: inProgressRooms
            };
        case INCURSION_ROOM_NOT_IN_PROGRESS:
            inProgressRooms = state.in_progress.filter((room) => room.id !== action.payload.id);
            localStorage.setItem(INCURSION_IN_PROGRESS_STORAGE, JSON.stringify(inProgressRooms));
            return {
                ...state,
                in_progress: inProgressRooms
            };
        case INITIALIZE_APP:
            try {
                completedRooms = JSON.parse(localStorage.getItem(INCURSION_COMPLETED_STORAGE)) || [];
                inProgressRooms = JSON.parse(localStorage.getItem(INCURSION_IN_PROGRESS_STORAGE)) || [];
                return {
                    ...state,
                    completed: completedRooms,
                    in_progress: inProgressRooms,
                };
            } catch (e) {
                return {...state};
            }
        case IMPORT_DATA:
            completedRooms = action.payload.incursion && action.payload.incursion.completed
                ? action.payload.incursion.completed
                : null;
            inProgressRooms = action.payload.incursion && action.payload.incursion.in_progress
                ? action.payload.incursion.in_progress
                : null;
            localStorage.setItem(INCURSION_COMPLETED_STORAGE, JSON.stringify(completedRooms));
            localStorage.setItem(INCURSION_IN_PROGRESS_STORAGE, JSON.stringify(inProgressRooms));
            return {
                ...state,
                completed: completedRooms,
                in_progress: inProgressRooms,
            };
        case INCURSION_RESET_IN_PROGRESS_DATA:
            localStorage.removeItem(INCURSION_IN_PROGRESS_STORAGE);
            return {
                ...state,
                in_progress: []
            };
        case INCURSION_RESET_COMPLETED_DATA:
            localStorage.removeItem(INCURSION_COMPLETED_STORAGE);
            return {
                ...state,
                completed: []
            };
        case RESET_ALL:
            localStorage.removeItem(INCURSION_IN_PROGRESS_STORAGE);
            localStorage.removeItem(INCURSION_COMPLETED_STORAGE);
            return {
                ...state,
                in_progress: [],
                completed: []
            };
        default :
            return state;
    }
}

export default incursionReducer;