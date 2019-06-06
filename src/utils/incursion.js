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

function findText(text, rooms) {
    return text === '' || rooms.some(room => room.name.toLowerCase().search(text.toLowerCase()) !== -1);
}

export function filteredIncursionData(rooms, accept, searchText) {
    return Object.keys(rooms)
        .reduce((result, roomsKey) => {
            if (accept(rooms[roomsKey]) && findText(searchText, rooms[roomsKey])) {
                result[roomsKey] = rooms[roomsKey];
            }
            return result;
        }, {});
}