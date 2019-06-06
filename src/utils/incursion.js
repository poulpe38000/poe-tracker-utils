import INCURSION_CONSTANTS from 'constants/incursion.constants';

export function getBaseRooms() {
    const roomsKeys = Object.keys(INCURSION_CONSTANTS.rooms);
    return roomsKeys.reduce((result, roomsKey) => {
        if (INCURSION_CONSTANTS.rooms[roomsKey].length === 1) {
            result[roomsKey] = INCURSION_CONSTANTS.rooms[roomsKey];
        }
        return result;
    }, {});
}

export function getTieredRooms() {
    const roomsKeys = Object.keys(INCURSION_CONSTANTS.rooms);
    return roomsKeys.reduce((result, roomsKey) => {
        if (INCURSION_CONSTANTS.rooms[roomsKey].length > 1) {
            result[roomsKey] = INCURSION_CONSTANTS.rooms[roomsKey];
        }
        return result;
    }, {});
}