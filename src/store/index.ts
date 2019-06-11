import {combineReducers, createStore, Store} from 'redux';
import {sidenavExpandedReducer, useLightThemeReducer} from 'store/root/reducers';
import incursionReducer from 'store/incursion/reducers';
import hideoutReducer from 'store/hideout/reducers';
import {IIncursionState} from './incursion/state';
import {IHideoutState} from './hideout/state';

export interface IAppState {
    useLightTheme: false,
    sidenavExpanded: false,
    incursion: IIncursionState;
    hideout: IHideoutState;
}

const store: Store = createStore(
    combineReducers({
        useLightTheme: useLightThemeReducer,
        sidenavExpanded: sidenavExpandedReducer,
        incursion: incursionReducer,
        hideout: hideoutReducer,
    })
);

export default store;