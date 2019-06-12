import {clearObj, getObj, setObj, STORAGE_KEYS} from 'utils/storage';
import INITIAL_STATE from 'store/root/state';

export function toggleInProgress(state, action) {
    const inProgressRooms = toggleIncursionRoom(state.in_progress.slice(), action.payload);
    return {
        ...state,
        in_progress: setObj(STORAGE_KEYS.INCURSION_IN_PROGRESS_STORAGE, inProgressRooms),
    };
}

export function toggleCompleted(state, action) {
    const completedRooms = toggleIncursionRoom(state.completed.slice(), action.payload);
    return {
        ...state,
        completed: setObj(STORAGE_KEYS.INCURSION_COMPLETED_STORAGE, completedRooms),
    };
}

export function validateInProgress(state) {
    const completedRooms = validateInProgressIncursion(state.in_progress.slice(), state.completed.slice());
    return {
        ...state,
        in_progress: clearObj(STORAGE_KEYS.INCURSION_IN_PROGRESS_STORAGE, INITIAL_STATE.incursion.in_progress),
        completed: setObj(STORAGE_KEYS.INCURSION_COMPLETED_STORAGE, completedRooms),
    };
}

export function updateSearchText(state, action) {
    return {
        ...state,
        searchText: action.payload,
    };
}

export function resetInProgressData(state) {
    return {
        ...state,
        in_progress: clearObj(STORAGE_KEYS.INCURSION_IN_PROGRESS_STORAGE, INITIAL_STATE.incursion.in_progress),
    };
}

export function resetCompletedData(state) {
    return {
        ...state,
        completed: clearObj(STORAGE_KEYS.INCURSION_COMPLETED_STORAGE, INITIAL_STATE.incursion.completed),
    };
}

export function resetData(state) {
    return {
        ...state,
        in_progress: clearObj(STORAGE_KEYS.INCURSION_IN_PROGRESS_STORAGE, INITIAL_STATE.incursion.in_progress),
        completed: clearObj(STORAGE_KEYS.INCURSION_COMPLETED_STORAGE, INITIAL_STATE.incursion.completed),
    };
}

export function setData(state) {
    return {
        ...state,
        in_progress: setObj(STORAGE_KEYS.INCURSION_IN_PROGRESS_STORAGE, state.in_progress),
        completed: setObj(STORAGE_KEYS.INCURSION_COMPLETED_STORAGE, state.completed),
    };
}

export function initializeApp(state) {
    try {
        return {
            ...state,
            in_progress: getObj(STORAGE_KEYS.INCURSION_IN_PROGRESS_STORAGE, INITIAL_STATE.incursion.in_progress),
            completed: getObj(STORAGE_KEYS.INCURSION_COMPLETED_STORAGE, INITIAL_STATE.incursion.completed),
        };
    } catch (e) {
        return {...state};
    }
}

export function importData(state, action) {
    const inProgressRooms = importIncursionData(state.in_progress.slice(), action.payload.data, action.payload.opts, {
        ignoreKey: 'ignoreInProgressIncursions',
        dataKey: 'in_progress'
    });
    const completedRooms = importIncursionData(state.completed.slice(), action.payload.data, action.payload.opts, {
        ignoreKey: 'ignoreCompletedIncursions',
        dataKey: 'completed'
    });
    return {
        ...state,
        in_progress: setObj(STORAGE_KEYS.INCURSION_IN_PROGRESS_STORAGE, inProgressRooms),
        completed: setObj(STORAGE_KEYS.INCURSION_COMPLETED_STORAGE, completedRooms),
    };
}


/*
PRIVATE FUNCTIONS
 */

export function toggleIncursionRoom(roomsList, room) {
    const roomAlreadySet = roomsList.find(item => item.id === room.id);
    if (!roomAlreadySet) {
        return [...roomsList, room];
    }
    const cleanRoomsList = roomsList.filter(item => item.id !== room.id);
    return roomAlreadySet.tier !== room.tier
        ? [...cleanRoomsList, room]
        : cleanRoomsList;
}

export function validateInProgressIncursion(inProgressRooms, completedRooms) {
    inProgressRooms.forEach(inProgressRoom => {
        const completedRoomIndex = completedRooms.findIndex((room) => room.id === inProgressRoom.id);
        if (completedRoomIndex !== -1) {
            if (completedRooms[completedRoomIndex].tier < inProgressRoom.tier) {
                completedRooms[completedRoomIndex].tier = inProgressRoom.tier;
            }
        } else {
            completedRooms.push(inProgressRoom);
        }
    });
    return completedRooms;
}

export function importIncursionData(roomsList, data, options, keys) {
    const ignoreImport = options && !!options[keys.ignoreKey];
    if (!ignoreImport) {
        return data && data.incursion && data.incursion[keys.dataKey]
            ? data.incursion[keys.dataKey]
            : [];
    }
    return roomsList;
}