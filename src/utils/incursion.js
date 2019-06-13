import INCURSION_CONSTANTS from 'constants/incursion.constants';

export function getBaseRooms() {
    return getRooms(baseRoomFilter);
}

export function getTieredRooms() {
    return getRooms(tieredRoomFilter);
}

export function filteredIncursionData(rooms, searchText) {
    return Object
        .keys(rooms)
        .reduce((result, roomsKey) => {
            if (findText(searchText, rooms[roomsKey])) {
                result[roomsKey] = rooms[roomsKey];
            }
            return result;
        }, {});
}

export function baseRoomFilter(rooms) {
    return rooms.length === 1;
}

export function tieredRoomFilter(rooms) {
    return rooms.length > 1;
}

function getRooms(accept) {
    return Object
        .keys(INCURSION_CONSTANTS.rooms)
        .reduce((result, roomsKey) => {
            if (accept(INCURSION_CONSTANTS.rooms[roomsKey])) {
                result[roomsKey] = INCURSION_CONSTANTS.rooms[roomsKey];
            }
            return result;
        }, {});
}

function findText(text, rooms) {
    return text === ''
        || rooms
            .some((room) => {
                return room.name.toLowerCase().search(text.toLowerCase()) !== -1
            });
}

export function cloneRooms(rooms) {
    return Object.assign({}, rooms);
}

export function validateInProgressIncursion(inProgressRooms, completedRooms) {
    let futureCompleted = cloneRooms(completedRooms);
    Object
        .keys(inProgressRooms)
        .forEach((roomKey) => {
            const inProgressTier = inProgressRooms[roomKey],
                completedTier = futureCompleted[roomKey];
            if (completedTier === undefined || completedTier < inProgressTier) {
                futureCompleted[roomKey] = inProgressTier;
            }
        });
    return futureCompleted;
}