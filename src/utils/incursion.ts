import INCURSION_CONSTANTS from 'constants/incursion.constants';

export function getBaseRooms(): any {
    const roomsKeys: string[] = Object.keys(INCURSION_CONSTANTS.rooms);
    return roomsKeys.reduce((result: any, roomsKey: string) => {
        if (INCURSION_CONSTANTS.rooms[roomsKey].length === 1) {
            result[roomsKey] = INCURSION_CONSTANTS.rooms[roomsKey];
        }
        return result;
    }, {});
}

export function getTieredRooms(): any {
    const roomsKeys: string[] = Object.keys(INCURSION_CONSTANTS.rooms);
    return roomsKeys.reduce((result: any, roomsKey: string) => {
        if (INCURSION_CONSTANTS.rooms[roomsKey].length > 1) {
            result[roomsKey] = INCURSION_CONSTANTS.rooms[roomsKey];
        }
        return result;
    }, {});
}

function findText(text: string, rooms: any[]) {
    return text === '' || rooms.some((room: any) => room.name.toLowerCase().search(text.toLowerCase()) !== -1);
}

export function filteredIncursionData(rooms: any, accept: Function, searchText: string): any {
    return Object.keys(rooms)
        .reduce((result: any, roomsKey: string) => {
            if (accept(rooms[roomsKey]) && findText(searchText, rooms[roomsKey])) {
                result[roomsKey] = rooms[roomsKey];
            }
            return result;
        }, {});
}