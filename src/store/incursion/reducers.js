import INITIAL_STATE from 'store/incursion/state';
import {
    A_INCURSION_ROOM_COMPLETED,
    A_INCURSION_ROOM_IN_PROGRESS,
    A_INCURSION_ROOM_INCOMPLETE,
    A_INCURSION_ROOM_NOT_IN_PROGRESS
} from 'store/incursion/actions';
import {IMPORT_DATA, INITIALIZE_APP} from 'store/main/actions';

function incursionReducer(state = INITIAL_STATE, action) {
    let completedRooms = state.completed.slice();
    let inProgressRooms = state.in_progress.slice();
    switch (action.type) {
        case A_INCURSION_ROOM_COMPLETED:
            if (!completedRooms.find((room) => room === action.payload)) {
                completedRooms.push(action.payload);
            }
            localStorage.setItem('completedIncursionRooms', JSON.stringify(completedRooms));
            return {
                ...state,
                completed: completedRooms
            };
        case A_INCURSION_ROOM_INCOMPLETE:
            completedRooms = state.completed.filter((room) => room !== action.payload);
            localStorage.setItem('completedIncursionRooms', JSON.stringify(completedRooms));
            return {
                ...state,
                completed: completedRooms
            };
        case A_INCURSION_ROOM_IN_PROGRESS:
            if (!inProgressRooms.find((room) => room === action.payload)) {
                inProgressRooms.push(action.payload);
            }
            localStorage.setItem('inProgressIncursionRooms', JSON.stringify(inProgressRooms));
            return {
                ...state,
                in_progress: inProgressRooms
            };
        case A_INCURSION_ROOM_NOT_IN_PROGRESS:
            inProgressRooms = state.in_progress.filter((room) => room !== action.payload);
            localStorage.setItem('inProgressIncursionRooms', JSON.stringify(inProgressRooms));
            return {
                ...state,
                in_progress: inProgressRooms
            };
        case INITIALIZE_APP:
            try {
                completedRooms = JSON.parse(localStorage.getItem('completedIncursionRooms')) || [];
                inProgressRooms = JSON.parse(localStorage.getItem('inProgressIncursionRooms')) || [];
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
            localStorage.setItem('completedIncursionRooms', JSON.stringify(completedRooms));
            localStorage.setItem('inProgressIncursionRooms', JSON.stringify(inProgressRooms));
            return {
                ...state,
                completed: completedRooms,
                in_progress: inProgressRooms,
            };
        default :
            return state;
    }
}

export default incursionReducer;