import INITIAL_STATE from 'store/main/state';
import {TOGGLE_SIDENAV} from 'store/main/actions';

function mainReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case TOGGLE_SIDENAV:
            return {
                ...state,
                sidenavExpanded: !state.sidenavExpanded,
            };
        default :
            return state;
    }
}

export default mainReducer;