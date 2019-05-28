import {combineReducers, createStore} from 'redux';
import mainReducer from 'store/main/reducers';
import incursionReducer from 'store/incursion/reducers';
import hideoutReducer from 'store/hideout/reducers';

const store = createStore(combineReducers({
    main: mainReducer,
    incursion: incursionReducer,
    hideout: hideoutReducer,
}));

export default store;