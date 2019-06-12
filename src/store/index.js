import {combineReducers, createStore} from 'redux';
import {sidenavExpandedReducer, useLightThemeReducer} from 'store/root/reducers';
import incursionReducer from 'store/incursion/reducers';
import hideoutReducer from 'store/hideout/reducers';

const store = createStore(combineReducers({
    useLightTheme: useLightThemeReducer,
    sidenavExpanded: sidenavExpandedReducer,
    incursion: incursionReducer,
    hideout: hideoutReducer,
}));

export default store;