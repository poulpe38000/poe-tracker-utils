import {IIncursionState} from 'store/incursion/state';
import {IHideoutState} from 'store/hideout/state';

export interface IAppState {
    useLightTheme: false,
    sidenavExpanded: false,
    incursion: IIncursionState;
    hideout: IHideoutState;
}

export const INITIAL_STATE: IAppState = {
    useLightTheme: false,
    sidenavExpanded: false,
    incursion: {
        searchText: '',
        completed: [],
        in_progress: [],
    },
    hideout: {
        searchText: '',
        filters: {},
        unlocked: []
    },
};