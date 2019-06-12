import INITIAL_STATE from 'store/root/state';
import {ACTION_TYPE as ROOT_ACTION} from 'store/root/actions';
import {getUseLightThemeSettings, toggleUseLightThemeSettings} from 'utils/storage';

export function sidenavExpandedReducer(state = INITIAL_STATE.sidenavExpanded, action) {
    switch (action.type) {
        case ROOT_ACTION.TOGGLE_SIDENAV:
            return !state;
        default :
            return state;
    }
}

export function useLightThemeReducer(state = INITIAL_STATE.useLightTheme, action) {
    switch (action.type) {
        case ROOT_ACTION.TOGGLE_THEME:
            return toggleUseLightThemeSettings();
        case ROOT_ACTION.INITIALIZE_APP:
            try {
                return getUseLightThemeSettings();
            } catch (e) {
                return state;
            }
        default :
            return state;
    }
}