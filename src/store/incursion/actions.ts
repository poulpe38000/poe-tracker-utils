import {AnyAction} from 'redux';

export const INCURSION_ROOM_TOGGLE_IN_PROGRESS = 'INCURSION_ROOM_TOGGLE_IN_PROGRESS';
export const INCURSION_ROOM_TOGGLE_COMPLETED = 'INCURSION_ROOM_TOGGLE_COMPLETED';
export const INCURSION_ROOM_VALIDATE_IN_PROGRESS = 'INCURSION_ROOM_VALIDATE_IN_PROGRESS';
export const INCURSION_UPDATE_SEARCH_TEXT = 'INCURSION_UPDATE_SEARCH_TEXT';
export const INCURSION_RESET_IN_PROGRESS_DATA = 'INCURSION_RESET_IN_PROGRESS_DATA';
export const INCURSION_RESET_COMPLETED_DATA = 'INCURSION_RESET_COMPLETED_DATA';

export function incursionRoomToggleInProgress(id: string, tier: number): AnyAction {
    return {type: INCURSION_ROOM_TOGGLE_IN_PROGRESS, payload: {id, tier}};
}

export function incursionRoomToggleCompleted(id: string, tier: number): AnyAction {
    return {type: INCURSION_ROOM_TOGGLE_COMPLETED, payload: {id, tier}};
}

export function incursionRoomValidateInProgress(): AnyAction {
    return {type: INCURSION_ROOM_VALIDATE_IN_PROGRESS};
}

export function incursionUpdateSearchText(payload: string): AnyAction {
    return {type: INCURSION_UPDATE_SEARCH_TEXT, payload};
}

export function incursionResetInProgressData(): AnyAction {
    return {type: INCURSION_RESET_IN_PROGRESS_DATA};
}

export function incursionResetCompletedData(): AnyAction {
    return {type: INCURSION_RESET_COMPLETED_DATA};
}
