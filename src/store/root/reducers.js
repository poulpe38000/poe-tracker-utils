import INITIAL_STATE from 'store/root/state';
import {ACTION_TYPE as ROOT_ACTION} from 'store/root/actions';
import {initializeApp, toggleSidenav, toggleTheme} from 'store/root/functions';

export function sidenavExpandedReducer(state = INITIAL_STATE.sidenavExpanded, action) {
    switch (action.type) {
        case ROOT_ACTION.TOGGLE_SIDENAV:
            return toggleSidenav(state);
        default :
            return state;
    }
}

export function useLightThemeReducer(state = INITIAL_STATE.useLightTheme, action) {
    switch (action.type) {
        case ROOT_ACTION.TOGGLE_THEME:
            return toggleTheme();
        case ROOT_ACTION.INITIALIZE_APP:
            return initializeApp(state);
        default :
            return state;
    }
}