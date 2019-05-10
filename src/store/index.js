import {combineReducers, createStore} from 'redux';
import appReducer from 'store/main/reducers';
import importExportReducer from 'store/import-export/reducers';
import incursionReducer from 'store/incursion/reducers';
import hideoutReducer from 'store/hideout/reducers';

const store = createStore(combineReducers({
    main: appReducer,
    importExport: importExportReducer,
    incursion: incursionReducer,
    hideout: hideoutReducer,
}));

export default store;