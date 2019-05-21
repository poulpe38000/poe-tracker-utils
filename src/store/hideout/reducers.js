import INITIAL_STATE from 'store/hideout/state';
import {
    HIDEOUT_RESET_DATA,
    HIDEOUT_RESET_FILTERS,
    HIDEOUT_TOGGLE_UNLOCKED,
    HIDEOUT_UPDATE_FILTERS,
    HIDEOUT_UPDATE_SEARCH_TEXT
} from 'store/hideout/actions';
import {IMPORT_DATA, INITIALIZE_APP, RESET_ALL} from 'store/main/actions';
import {clearObj, getObj, setObj} from 'utils/storage.utils';

const HIDEOUT_UNLOCKED_STORAGE = 'hideoutUnlocked';

function hideoutReducer(state = INITIAL_STATE, action) {
    let unlocked;
    switch (action.type) {
        case HIDEOUT_TOGGLE_UNLOCKED:
            const i = state.unlocked.findIndex((hideout) => hideout === action.payload);
            if (i !== -1) {
                unlocked = state.unlocked.filter((hideout) => hideout !== action.payload);

            } else {
                unlocked = [...state.unlocked, action.payload];
            }
            setObj(HIDEOUT_UNLOCKED_STORAGE, unlocked);
            return {
                ...state,
                unlocked: unlocked
            };
        case HIDEOUT_UPDATE_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.payload
            };
        case HIDEOUT_UPDATE_FILTERS:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    ...action.payload
                }
            };
        case HIDEOUT_RESET_FILTERS:
            return {
                ...state,
                filters: {}
            };
        case HIDEOUT_RESET_DATA:
            clearObj(HIDEOUT_UNLOCKED_STORAGE);
            return {
                ...state,
                unlocked: []
            };
        case RESET_ALL:
            clearObj(HIDEOUT_UNLOCKED_STORAGE);
            return {
                ...state,
                unlocked: []
            };
        case INITIALIZE_APP:
            try {
                return {
                    ...state,
                    unlocked: getObj(HIDEOUT_UNLOCKED_STORAGE, [])
                };
            } catch (e) {
                return {...state};
            }
        case IMPORT_DATA:
            unlocked = action.payload.hideout && action.payload.hideout.unlocked
                ? action.payload.hideout.unlocked
                : [];
            setObj(HIDEOUT_UNLOCKED_STORAGE, unlocked);
            return {
                ...state,
                unlocked: unlocked
            };
        default:
            return state;
    }
}

export default hideoutReducer;