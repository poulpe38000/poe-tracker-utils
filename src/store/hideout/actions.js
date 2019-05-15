export const HIDEOUT_TOGGLE_UNLOCKED = 'HIDEOUT_TOGGLE_UNLOCKED';
export const HIDEOUT_UPDATE_SEARCH_TEXT = 'HIDEOUT_UPDATE_SEARCH_TEXT';
export const HIDEOUT_UPDATE_FILTERS = 'HIDEOUT_UPDATE_FILTERS';
export const HIDEOUT_RESET_FILTERS = 'HIDEOUT_RESET_FILTERS';
export const HIDEOUT_RESET_DATA = 'HIDEOUT_RESET_DATA';

export function hideoutToggleUnlocked(payload) {
    return {type: HIDEOUT_TOGGLE_UNLOCKED, payload};
}

export function hideoutUpdateSearchText(payload) {
    return {type: HIDEOUT_UPDATE_SEARCH_TEXT, payload};
}

export function hideoutUpdateFilters(payload) {
    return {type: HIDEOUT_UPDATE_FILTERS, payload};
}

export function hideoutResetFilters() {
    return {type: HIDEOUT_RESET_FILTERS};
}

export function hideoutResetData() {
    return {type: HIDEOUT_RESET_DATA};
}
