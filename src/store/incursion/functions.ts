import {IIncursionStateRoom} from './state';

export function toggleIncursionRoom(roomsList: IIncursionStateRoom[], room: IIncursionStateRoom): IIncursionStateRoom[] {
    const roomAlreadySet = roomsList.find(item => item.id === room.id);
    if (!roomAlreadySet) {
        return [...roomsList, room];
    }
    const cleanRoomsList = roomsList.filter(item => item.id !== room.id);
    return roomAlreadySet.tier !== room.tier
        ? [...cleanRoomsList, room]
        : cleanRoomsList;
}

export function validateInProgressIncursion(inProgressRooms: IIncursionStateRoom[], completedRooms: IIncursionStateRoom[]): IIncursionStateRoom[] {
    inProgressRooms.forEach(inProgressRoom => {
        const completedRoomIndex = completedRooms.findIndex((room) => room.id === inProgressRoom.id);
        if (completedRoomIndex !== -1) {
            if (completedRooms[completedRoomIndex].tier < inProgressRoom.tier) {
                completedRooms[completedRoomIndex].tier = inProgressRoom.tier;
            }
        } else {
            completedRooms.push(inProgressRoom);
        }
    });
    return completedRooms;
}

export function importIncursionData(roomsList: IIncursionStateRoom[], data: any, options: any, keys: any): IIncursionStateRoom[] {
    const ignoreImport = options && !!options[keys.ignoreKey];
    if (!ignoreImport) {
        return data && data.incursion && data.incursion[keys.dataKey]
            ? data.incursion[keys.dataKey]
            : [];
    }
    return roomsList;
}