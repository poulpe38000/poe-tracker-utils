import {combineReducers, createStore, Store} from 'redux';
import {sidenavExpandedReducer, useLightThemeReducer} from 'store/root/reducers';
import incursionReducer from 'store/incursion/reducers';
import hideoutReducer from 'store/hideout/reducers';

const store: Store = createStore(
    combineReducers({
        useLightTheme: useLightThemeReducer,
        sidenavExpanded: sidenavExpandedReducer,
        incursion: incursionReducer,
        hideout: hideoutReducer,
    })
);

export default store;