export const A_INCURSION_ROOM_COMPLETED = 'INCURSION_ROOM_COMPLETED';
export const A_INCURSION_ROOM_INCOMPLETE = 'INCURSION_ROOM_INCOMPLETE';
export const A_INCURSION_ROOM_IN_PROGRESS = 'INCURSION_ROOM_IN_PROGRESS';
export const A_INCURSION_ROOM_NOT_IN_PROGRESS = 'INCURSION_ROOM_NOT_IN_PROGRESS';

export function incursionRoomCompleted(payload) {
    return {type: A_INCURSION_ROOM_COMPLETED, payload};
}

export function incursionRoomIncomplete(payload) {
    return {type: A_INCURSION_ROOM_INCOMPLETE, payload};
}

export function incursionRoomInProgress(payload) {
    return {type: A_INCURSION_ROOM_IN_PROGRESS, payload};
}

export function incursionRoomNotInProgress(payload) {
    return {type: A_INCURSION_ROOM_NOT_IN_PROGRESS, payload};
}
