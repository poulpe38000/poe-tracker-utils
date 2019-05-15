export const HIDEOUT_TOGGLE_UNLOCKED = 'HIDEOUT_TOGGLE_UNLOCKED';
export const HIDEOUT_UPDATE_SEARCH_TEXT = 'HIDEOUT_UPDATE_SEARCH_TEXT';

export function hideoutToggleUnlocked(payload) {
    return {type: HIDEOUT_TOGGLE_UNLOCKED, payload};
}

export function hideoutUpdateSearchText(payload) {
    return {type: HIDEOUT_UPDATE_SEARCH_TEXT, payload};
}
