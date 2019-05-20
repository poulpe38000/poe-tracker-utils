import {combineReducers, createStore} from 'redux';
import appReducer from 'store/main/reducers';
import incursionReducer from 'store/incursion/reducers';
import hideoutReducer from 'store/hideout/reducers';

const store = createStore(combineReducers({
    main: appReducer,
    incursion: incursionReducer,
    hideout: hideoutReducer,
}));

export default store;