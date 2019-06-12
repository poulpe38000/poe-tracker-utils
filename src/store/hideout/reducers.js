import {ACTION_TYPE as HIDEOUT_ACTION} from 'store/hideout/actions';
import {ACTION_TYPE as ROOT_ACTION} from 'store/root/actions';
import {clearObj, getObj, HIDEOUT_UNLOCKED_STORAGE, setObj} from 'utils/storage';
import {importHideoutData, toggleUnlockedHideout} from 'store/hideout/functions';
import INITIAL_STATE from 'store/root/state';


function hideoutReducer(state = INITIAL_STATE.hideout, action) {
    let unlocked = state.unlocked.slice();
    switch (action.type) {
        case HIDEOUT_ACTION.TOGGLE_UNLOCKED:
            unlocked = toggleUnlockedHideout(unlocked, action.payload);
            return {
                ...state,
                unlocked: setObj(HIDEOUT_UNLOCKED_STORAGE, unlocked),
            };
        case HIDEOUT_ACTION.UPDATE_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.payload,
            };
        case HIDEOUT_ACTION.UPDATE_FILTERS:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    ...action.payload,
                }
            };
        case HIDEOUT_ACTION.RESET_FILTERS:
            return {
                ...state,
                filters: {},
            };
        case HIDEOUT_ACTION.RESET_DATA:
        case ROOT_ACTION.RESET_ALL:
            return {
                ...state,
                unlocked: clearObj(HIDEOUT_UNLOCKED_STORAGE, []),
            };
        case ROOT_ACTION.SET_ALL:
            return {
                ...state,
                unlocked: setObj(HIDEOUT_UNLOCKED_STORAGE, unlocked),
            };
        case ROOT_ACTION.INITIALIZE_APP:
            try {
                return {
                    ...state,
                    unlocked: getObj(HIDEOUT_UNLOCKED_STORAGE, []),
                };
            } catch (e) {
                return state;
            }
        case ROOT_ACTION.IMPORT_DATA:
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