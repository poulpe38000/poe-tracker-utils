import INITIAL_STATE from 'store/hideout/state';
import {
    HIDEOUT_RESET_DATA,
    HIDEOUT_RESET_FILTERS,
    HIDEOUT_TOGGLE_UNLOCKED,
    HIDEOUT_UPDATE_FILTERS,
    HIDEOUT_UPDATE_SEARCH_TEXT
} from 'store/hideout/actions';
import {IMPORT_DATA, INITIALIZE_APP, RESET_ALL, SET_ALL} from 'store/main/actions';
import {clearObj, getObj, HIDEOUT_UNLOCKED_STORAGE, setObj} from 'utils/storage';
import {importHideoutData, toggleUnlockedHideout} from 'store/hideout/functions';


function hideoutReducer(state = INITIAL_STATE, action) {
    let unlocked = state.unlocked.slice();
    switch (action.type) {
        case HIDEOUT_TOGGLE_UNLOCKED:
            unlocked = toggleUnlockedHideout(unlocked, action.payload);
            return {
                ...state,
                unlocked: setObj(HIDEOUT_UNLOCKED_STORAGE, unlocked),
            };
        case HIDEOUT_UPDATE_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.payload,
            };
        case HIDEOUT_UPDATE_FILTERS:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    ...action.payload,
                }
            };
        case HIDEOUT_RESET_FILTERS:
            return {
                ...state,
                filters: {},
            };
        case HIDEOUT_RESET_DATA:
        case RESET_ALL:
            return {
                ...state,
                unlocked: clearObj(HIDEOUT_UNLOCKED_STORAGE, []),
            };
        case SET_ALL:
            return {
                ...state,
                unlocked: setObj(HIDEOUT_UNLOCKED_STORAGE, unlocked),
            };
        case INITIALIZE_APP:
            try {
                return {
                    ...state,
                    unlocked: getObj(HIDEOUT_UNLOCKED_STORAGE, []),
                };
            } catch (e) {
                return state;
            }
        case IMPORT_DATA:
            unlocked = importHideoutData(unlocked, action.payload.data, action.payload.opts, {
                ignoreKey: 'ignoreHideouts',
                dataKey: 'unlocked'
            });
            return {
                ...state,
                unlocked: setObj(HIDEOUT_UNLOCKED_STORAGE, unlocked),
            };
        default:
            return state;
    }
}

export default hideoutReducer;