import INITIAL_STATE from 'store/main/state';
import {ACTION_TYPE as ROOT_ACTION} from 'store/main/actions';
import {getUseLightThemeSettings, toggleUseLightThemeSettings} from 'utils/storage';

function mainReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ROOT_ACTION.TOGGLE_SIDENAV:
            return {
                ...state,
                sidenavExpanded: !state.sidenavExpanded,
            };
        case ROOT_ACTION.TOGGLE_THEME:
            return {
                ...state,
                useLightTheme: toggleUseLightThemeSettings(),
            };
        case ROOT_ACTION.INITIALIZE_APP:
            try {
                return {
                    ...state,
                    useLightTheme: getUseLightThemeSettings(),
                };
            } catch (e) {
                return {...state};
            }
        default :
            return state;
    }
}

export default mainReducer;