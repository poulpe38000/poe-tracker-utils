import {ACTION_TYPE} from 'store/actions';
import {getUseLightThemeSettings, toggleUseLightThemeSettings} from 'utils/storage';
import {INITIAL_STATE} from 'store/state';

export function useLightThemeReducer(state: boolean = INITIAL_STATE.useLightTheme, action: any): boolean {
    switch (action.type) {
        case ACTION_TYPE.TOGGLE_THEME:
            return toggleUseLightThemeSettings();
        case ACTION_TYPE.INITIALIZE_APP:
            try {
                return getUseLightThemeSettings();
            } catch (e) {
                return state;
            }
        default :
            return state;
    }
}

export function sidenavExpandedReducer(state: boolean = INITIAL_STATE.sidenavExpanded, action: any): boolean {
    switch (action.type) {
        case ACTION_TYPE.TOGGLE_SIDENAV:
            return !state;
        default :
            return state;
    }
}