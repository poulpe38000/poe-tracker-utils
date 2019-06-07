import INITIAL_STATE, {IMainState} from 'store/main/state';
import {INITIALIZE_APP, TOGGLE_SIDENAV, TOGGLE_THEME} from 'store/main/actions';
import {getUseLightThemeSettings, toggleUseLightThemeSettings} from 'utils/storage';

function mainReducer(state: IMainState = INITIAL_STATE, action: any): IMainState {
    switch (action.type) {
        case TOGGLE_SIDENAV:
            return {
                ...state,
                sidenavExpanded: !state.sidenavExpanded,
            };
        case TOGGLE_THEME:
            return {
                ...state,
                useLightTheme: toggleUseLightThemeSettings(),
            };
        case INITIALIZE_APP:
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