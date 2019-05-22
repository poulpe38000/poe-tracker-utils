import INITIAL_STATE from 'store/incursion/state';
import {
    INCURSION_RESET_COMPLETED_DATA,
    INCURSION_RESET_IN_PROGRESS_DATA,
    INCURSION_ROOM_TOGGLE_COMPLETED,
    INCURSION_ROOM_TOGGLE_IN_PROGRESS, INCURSION_ROOM_VALIDATE_IN_PROGRESS
} from 'store/incursion/actions';
import {IMPORT_DATA, INITIALIZE_APP, RESET_ALL} from 'store/main/actions';
import {clearObj, getObj, setObj} from 'utils/storage';
import INCURSION_CONSTANTS from 'constants/incursion.constants';

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

                if (completedRoomSet.tier !== action.payload.tier) {
                    // Case 1, non upgradeable room
                    if (!!INCURSION_CONSTANTS.rooms.non_upgradeable[action.payload.id]) {
                        completedRooms.push({
                            ...action.payload,
                            tier: 0
                        });
                    }
                    if (!!INCURSION_CONSTANTS.rooms.upgradeable[action.payload.id] && action.payload.tier > 0) {
                        completedRooms.push(action.payload);
                    }
                }
            }
            return {
                ...state,
                completed: setObj(INCURSION_COMPLETED_STORAGE, completedRooms),
            };
        case INCURSION_ROOM_TOGGLE_IN_PROGRESS:
            const inProgressRoomSet = inProgressRooms.find((room) => room.id === action.payload.id);
            if (!inProgressRoomSet && action.payload.tier >= 0) {
                inProgressRooms.push(action.payload);
            } else {
                inProgressRooms = state.completed.filter((room) => room.id !== action.payload.id);
                if (inProgressRoomSet.tier !== action.payload.tier) {
                    // Case 1, non upgradeable room
                    if (!!INCURSION_CONSTANTS.rooms.non_upgradeable[action.payload.id]) {
                        inProgressRooms.push({
                            ...action.payload,
                            tier: 0
                        });
                    }
                    if (!!INCURSION_CONSTANTS.rooms.upgradeable[action.payload.id] && action.payload.tier > 0) {
                        inProgressRooms.push(action.payload);
                    }
                }
            }
            return {
                ...state,
                in_progress: setObj(INCURSION_IN_PROGRESS_STORAGE, inProgressRooms),
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
            return {
                ...state,
                completed: setObj(INCURSION_COMPLETED_STORAGE, completedRooms),
                in_progress: clearObj(INCURSION_IN_PROGRESS_STORAGE, []),
            };
        case INITIALIZE_APP:
            try {
                return {
                    ...state,
                    completed: getObj(INCURSION_COMPLETED_STORAGE, []),
                    in_progress: getObj(INCURSION_IN_PROGRESS_STORAGE, []),
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
            return {
                ...state,
                completed: setObj(INCURSION_COMPLETED_STORAGE, completedRooms),
                in_progress: setObj(INCURSION_IN_PROGRESS_STORAGE, inProgressRooms),
            };
        case INCURSION_RESET_IN_PROGRESS_DATA:
            return {
                ...state,
                in_progress: clearObj(INCURSION_IN_PROGRESS_STORAGE, []),
            };
        case INCURSION_RESET_COMPLETED_DATA:
            return {
                ...state,
                completed: clearObj(INCURSION_COMPLETED_STORAGE, []),
            };
        case RESET_ALL:
            return {
                ...state,
                in_progress: clearObj(INCURSION_IN_PROGRESS_STORAGE, []),
                completed: clearObj(INCURSION_COMPLETED_STORAGE, []),
            };
        default :
            return state;
    }
}

export default incursionReducer;