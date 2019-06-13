
const HIDEOUT_INITIAL_STATE = {
    searchText: '',
    filters: {},
    unlocked: []
};

const INCURSION_INITIAL_STATE = {
    searchText: '',
    completed: {},
    in_progress: {}
};

const INITIAL_STATE = {
    useLightTheme: false,
    sidenavExpanded: false,
    hideout: HIDEOUT_INITIAL_STATE,
    incursion: INCURSION_INITIAL_STATE,
};

export default INITIAL_STATE;
