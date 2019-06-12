export const ACTION_TYPE = {
    TOGGLE_UNLOCKED: 'HIDEOUT_TOGGLE_UNLOCKED',
    UPDATE_SEARCH_TEXT: 'HIDEOUT_UPDATE_SEARCH_TEXT',
    UPDATE_FILTERS: 'HIDEOUT_UPDATE_FILTERS',
    RESET_FILTERS: 'HIDEOUT_RESET_FILTERS',
    RESET_DATA: 'HIDEOUT_RESET_DATA',
};

export const hideoutActions = {
    toggleUnlocked: (payload) => ({type: ACTION_TYPE.TOGGLE_UNLOCKED, payload}),
    updateSearchText: (payload) => ({type: ACTION_TYPE.UPDATE_SEARCH_TEXT, payload}),
    updateFilters: (payload) => ({type: ACTION_TYPE.UPDATE_FILTERS, payload}),
    resetFilters: () => ({type: ACTION_TYPE.RESET_FILTERS}),
    resetData: () => ({type: ACTION_TYPE.RESET_DATA}),
};
