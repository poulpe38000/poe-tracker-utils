import INITIAL_STATE from 'store/hideout/state';
import {HIDEOUT_TOGGLE_UNLOCKED, HIDEOUT_UPDATE_SEARCH_TEXT} from 'store/hideout/actions';
import {IMPORT_DATA, INITIALIZE_APP} from 'store/main/actions';

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
            localStorage.setItem('unlockedHideouts', JSON.stringify(unlocked));
            return {
                ...state,
                unlocked: unlocked
            };
        case HIDEOUT_UPDATE_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.payload
            };
        case INITIALIZE_APP:
            try {
                return {
                    ...state,
                    unlocked: JSON.parse(localStorage.getItem('unlockedHideouts')) || []
                };
            } catch (e) {
                return {...state};
            }
        case IMPORT_DATA:
            unlocked = action.payload.hideout && action.payload.hideout.unlocked
                ? action.payload.hideout.unlocked
                : [];
            localStorage.setItem('unlockedHideouts', JSON.stringify(unlocked));
            return {
                ...state,
                unlocked: unlocked
            };
        default:
            return state;
    }
}

export default hideoutReducer;