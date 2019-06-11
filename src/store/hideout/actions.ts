import {AnyAction} from 'redux';

export enum ACTION_TYPE {
    TOGGLE_UNLOCKED = 'HIDEOUT_TOGGLE_UNLOCKED',
    UPDATE_SEARCH_TEXT = 'HIDEOUT_UPDATE_SEARCH_TEXT',
    UPDATE_FILTERS = 'HIDEOUT_UPDATE_FILTERS',
    RESET_FILTERS = 'HIDEOUT_RESET_FILTERS',
    RESET_DATA = 'HIDEOUT_RESET_DATA',
}

export const hideoutActions = {
    toggleUnlocked: (payload: string): AnyAction => ({type: ACTION_TYPE.TOGGLE_UNLOCKED, payload}),
    updateSearchText: (payload: string): AnyAction => ({type: ACTION_TYPE.UPDATE_SEARCH_TEXT, payload}),
    updateFilters: (payload: any): AnyAction => ({type: ACTION_TYPE.UPDATE_FILTERS, payload}),
    resetFilters: (): AnyAction => ({type: ACTION_TYPE.RESET_FILTERS}),
    resetData: (): AnyAction => ({type: ACTION_TYPE.RESET_DATA}),
};