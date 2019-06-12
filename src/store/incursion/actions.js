export const ACTION_TYPE = {
    TOGGLE_IN_PROGRESS: 'INCURSION_TOGGLE_IN_PROGRESS',
    TOGGLE_COMPLETED: 'INCURSION_TOGGLE_COMPLETED',
    VALIDATE_IN_PROGRESS: 'INCURSION_VALIDATE_IN_PROGRESS',
    UPDATE_SEARCH_TEXT: 'INCURSION_UPDATE_SEARCH_TEXT',
    RESET_IN_PROGRESS_DATA: 'INCURSION_RESET_IN_PROGRESS_DATA',
    RESET_COMPLETED_DATA: 'INCURSION_RESET_COMPLETED_DATA',
};

export const incursionActions = {
    toggleInProgress: (payload) => ({type: ACTION_TYPE.TOGGLE_IN_PROGRESS, payload}),
    toggleCompleted: (payload) => ({type: ACTION_TYPE.TOGGLE_COMPLETED, payload}),
    validateInProgress: () => ({type: ACTION_TYPE.VALIDATE_IN_PROGRESS}),
    updateSearchText: (payload) => ({type: ACTION_TYPE.UPDATE_SEARCH_TEXT, payload}),
    resetInProgressData: () => ({type: ACTION_TYPE.RESET_IN_PROGRESS_DATA}),
    resetCompletedData: () => ({type: ACTION_TYPE.RESET_COMPLETED_DATA}),
};