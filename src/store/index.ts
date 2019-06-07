import {combineReducers, createStore, Store} from 'redux';
import mainReducer from 'store/main/reducers';
import incursionReducer from 'store/incursion/reducers';
import hideoutReducer from 'store/hideout/reducers';
import {IMainState} from './main/state';
import {IIncursionState} from './incursion/state';
import {IHideoutState} from './hideout/state';

export interface IAppState {
    main: IMainState;
    incursion: IIncursionState;
    hideout: IHideoutState;
}

const store: Store = createStore(
    combineReducers({
        main: mainReducer,
        incursion: incursionReducer,
        hideout: hideoutReducer,
    })
);

export default store;