import INITIAL_STATE from 'store/state';
import {TOGGLE_DRAWER} from 'store/actions';

function appReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case TOGGLE_DRAWER:
            return {
                ...state,
                showDrawer: action.payload
            };
        default :
            return state;
    }
}

export default appReducer;