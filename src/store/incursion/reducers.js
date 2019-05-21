import INITIAL_STATE from 'store/incursion/state';
import {
    INCURSION_RESET_COMPLETED_DATA,
    INCURSION_RESET_IN_PROGRESS_DATA,
    INCURSION_ROOM_TOGGLE_COMPLETED,
    INCURSION_ROOM_TOGGLE_IN_PROGRESS, INCURSION_ROOM_VALIDATE_IN_PROGRESS
} from 'store/incursion/actions';
import {IMPORT_DATA, INITIALIZE_APP, RESET_ALL} from 'store/main/actions';
import {clearObj, getObj, setObj} from 'utils/storage.utils';

const INCURSION_COMPLETED_STORAGE = 'incursionCompleted';
const INCURSION_IN_PROGRESS_STORAGE = 'incursionInProgress';

function incursionReducer(state = INITIAL_STATE, action) {
    let completedRooms = state.completed.slice();
    let inProgressRooms = state.in_progress.slice();
    switch (action.type) {
        case INCURSION_ROOM_TOGGLE_COMPLETED:
            const completedRoomSet = completedRooms.find((room) => room.id === action.payload.id);
            if (!completedRoomSet) {
                completedRooms.push(action.payload);
            } else {
                completedRooms = state.completed.filter((room) => room.id !== action.payload.id);
                if (completedRoomSet.tier !== action.payload.tier && action.payload.tier >= 0) {
                    completedRooms.push(action.payload);
                }
            }
            setObj(INCURSION_COMPLETED_STORAGE, completedRooms);
            return {
                ...state,
                completed: completedRooms
            };
        case INCURSION_ROOM_TOGGLE_IN_PROGRESS:
            const inProgressRoomSet = inProgressRooms.find((room) => room.id === action.payload.id);
            if (!inProgressRoomSet && action.payload.tier >= 0) {
                inProgressRooms.push(action.payload);
            } else {
                inProgressRooms = state.completed.filter((room) => room.id !== action.payload.id);
                if (inProgressRoomSet.tier !== action.payload.tier && action.payload.tier >= 0) {
                    inProgressRooms.push(action.payload);
                }
            }
            setObj(INCURSION_IN_PROGRESS_STORAGE, inProgressRooms);
            return {
                ...state,
                in_progress: inProgressRooms
            };
        case INCURSION_ROOM_VALIDATE_IN_PROGRESS:
            inProgressRooms.forEach(inProgressRoom => {
                const completedRoomIndex = completedRooms.findIndex((room) => room.id === inProgressRoom.id);
                if (completedRoomIndex !== -1 && completedRooms[completedRoomIndex].tier < inProgressRoom.tier) {
                    completedRooms[completedRoomIndex].tier = inProgressRoom.tier;
                } else {
                    completedRooms.push(inProgressRoom);
                }
            });
            setObj(INCURSION_COMPLETED_STORAGE, completedRooms);
            clearObj(INCURSION_IN_PROGRESS_STORAGE);
            return {
                ...state,
                completed: completedRooms,
                in_progress: []
            };
        case INITIALIZE_APP:
            try {
                completedRooms = getObj(INCURSION_COMPLETED_STORAGE, []);
                inProgressRooms = getObj(INCURSION_IN_PROGRESS_STORAGE, []);
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
            setObj(INCURSION_COMPLETED_STORAGE, completedRooms);
            setObj(INCURSION_IN_PROGRESS_STORAGE, inProgressRooms);
            return {
                ...state,
                completed: completedRooms,
                in_progress: inProgressRooms,
            };
        case INCURSION_RESET_IN_PROGRESS_DATA:
            clearObj(INCURSION_IN_PROGRESS_STORAGE);
            return {
                ...state,
                in_progress: []
            };
        case INCURSION_RESET_COMPLETED_DATA:
            clearObj(INCURSION_COMPLETED_STORAGE);
            return {
                ...state,
                completed: []
            };
        case RESET_ALL:
            clearObj(INCURSION_IN_PROGRESS_STORAGE);
            clearObj(INCURSION_COMPLETED_STORAGE);
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