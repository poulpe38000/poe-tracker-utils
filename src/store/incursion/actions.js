export const INCURSION_ROOM_COMPLETED = 'INCURSION_ROOM_COMPLETED';
export const INCURSION_ROOM_INCOMPLETE = 'INCURSION_ROOM_INCOMPLETE';
export const INCURSION_ROOM_IN_PROGRESS = 'INCURSION_ROOM_IN_PROGRESS';
export const INCURSION_ROOM_NOT_IN_PROGRESS = 'INCURSION_ROOM_NOT_IN_PROGRESS';
export const INCURSION_RESET_COMPLETED_DATA = 'INCURSION_RESET_COMPLETED_DATA';
export const INCURSION_RESET_IN_PROGRESS_DATA = 'INCURSION_RESET_IN_PROGRESS_DATA';

export function incursionRoomCompleted(payload) {
    return {type: INCURSION_ROOM_COMPLETED, payload};
}

export function incursionRoomIncomplete(payload) {
    return {type: INCURSION_ROOM_INCOMPLETE, payload};
}

export function incursionRoomInProgress(payload) {
    return {type: INCURSION_ROOM_IN_PROGRESS, payload};
}

export function incursionRoomNotInProgress(payload) {
    return {type: INCURSION_ROOM_NOT_IN_PROGRESS, payload};
}

export function incursionResetCompletedData() {
    return {type: INCURSION_RESET_COMPLETED_DATA};
}

export function incursionResetInProgressData() {
    return {type: INCURSION_RESET_IN_PROGRESS_DATA};
}
