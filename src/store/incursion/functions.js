import {clearObj, getObj, setObj, STORAGE_KEYS} from 'utils/storage';
import INITIAL_STATE from 'store/root/state';
import {cloneRooms, validateInProgressIncursion} from 'utils/incursion';

export function toggleInProgress(state, action) {
    const inProgressRooms = toggleIncursionRoom(cloneRooms(state.in_progress), action.payload);
    return {
        ...state,
        in_progress: setObj(STORAGE_KEYS.INCURSION_IN_PROGRESS_STORAGE, inProgressRooms),
    };
}

export function toggleCompleted(state, action) {
    const completedRooms = toggleIncursionRoom(cloneRooms(state.completed), action.payload);
    return {
        ...state,
        completed: setObj(STORAGE_KEYS.INCURSION_COMPLETED_STORAGE, completedRooms),
    };
}

export function validateInProgress(state) {
    const completedRooms = validateInProgressIncursion(
        cloneRooms(state.in_progress),
        cloneRooms(state.completed)
    );
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
    const inProgressRooms = importIncursionData(
        cloneRooms(state.in_progress),
        action.payload.data,
        action.payload.opts,
        {ignoreKey: 'ignoreInProgressIncursions', dataKey: 'in_progress'},
        INITIAL_STATE.incursion.in_progress
    );
    const completedRooms = importIncursionData(
        cloneRooms(state.completed),
        action.payload.data,
        action.payload.opts,
        {ignoreKey: 'ignoreCompletedIncursions', dataKey: 'completed'},
        INITIAL_STATE.incursion.completed
    );
    return {
        ...state,
        in_progress: setObj(STORAGE_KEYS.INCURSION_IN_PROGRESS_STORAGE, inProgressRooms),
        completed: setObj(STORAGE_KEYS.INCURSION_COMPLETED_STORAGE, completedRooms),
    };
}


/*
PRIVATE FUNCTIONS
 */

function toggleIncursionRoom(roomsList, room) {
    const currentTier = roomsList[room.id];
    if (currentTier === undefined || currentTier !== room.tier) {
        return {...roomsList, [room.id]: room.tier};
    }
    delete roomsList[room.id];
    return roomsList;
}

function importIncursionData(roomsList, data, options, keys, fallback) {
    const ignoreImport = options && !!options[keys.ignoreKey];
    if (!ignoreImport) {
        return data && data.incursion && data.incursion[keys.dataKey]
            ? data.incursion[keys.dataKey]
            : fallback;
    }
    return roomsList;
}