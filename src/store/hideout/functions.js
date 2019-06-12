import {clearObj, getObj, STORAGE_KEYS, setObj} from 'utils/storage';
import INITIAL_STATE from 'store/root/state';

export function toggleUnlocked(state, action) {
    const unlocked = toggleUnlockedHideout(state.unlocked.slice(), action.payload);
    return {
        ...state,
        unlocked: setObj(STORAGE_KEYS.HIDEOUT_UNLOCKED_STORAGE, unlocked),
    };
}

export function updateSearchText(state, action) {
    return {
        ...state,
        searchText: action.payload,
    };
}

export function updateFilters(state, action) {
    return {
        ...state,
        filters: {
            ...state.filters,
            ...action.payload,
        }
    };
}

export function resetFilters(state) {
    return {
        ...state,
        filters: INITIAL_STATE.hideout.filters,
    };
}

export function resetData(state) {
    return {
        ...state,
        unlocked: clearObj(STORAGE_KEYS.HIDEOUT_UNLOCKED_STORAGE, INITIAL_STATE.hideout.unlocked),
    };
}

export function setData(state) {
    const unlocked = state.unlocked.slice();
    return {
        ...state,
        unlocked: setObj(STORAGE_KEYS.HIDEOUT_UNLOCKED_STORAGE, unlocked),
    };
}

export function initializeApp(state) {
    try {
        return {
            ...state,
            unlocked: getObj(STORAGE_KEYS.HIDEOUT_UNLOCKED_STORAGE, INITIAL_STATE.hideout.unlocked),
        };
    } catch (e) {
        return state;
    }
}

export function importData(state, action) {
    const unlocked = importHideoutData(state.unlocked.slice(), action.payload.data, action.payload.opts, {
        ignoreKey: 'ignoreHideouts',
        dataKey: 'unlocked'
    });
    return {
        ...state,
        unlocked: setObj(STORAGE_KEYS.HIDEOUT_UNLOCKED_STORAGE, unlocked),
    };
}

/*
PRIVATE FUNCTIONS
 */

function toggleUnlockedHideout(unlockedList, hideout) {
    const found = (unlockedList.findIndex(item => item === hideout) !== -1);
    return found
        ? unlockedList.filter(item => item !== hideout)
        : [...unlockedList, hideout];
}

function importHideoutData(unlockedList, data, options, keys) {
    const ignoreImport = options && !!options[keys.ignoreKey];
    if (!ignoreImport) {
        return data && data.hideout && data.hideout[keys.dataKey]
            ? data.hideout[keys.dataKey]
            : INITIAL_STATE.hideout.unlocked;
    }
    return unlockedList;
}