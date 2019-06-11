import HIDEOUT_CONSTANTS from 'constants/hideout.constants';
import INCURSION_CONSTANTS from 'constants/incursion.constants';
import {IIncursionRoom} from 'interfaces/incursion';

function getRoomsTierBoundaries(rooms: any): any {
    const roomsKeys: string[] = Object.keys(rooms);
    return roomsKeys.reduce((res: any, key: string) => {
        const roomTiers = rooms[key].map((room: any) => room.tier);
        res[key] = {
            min: Math.min(...roomTiers),
            max: Math.max(...roomTiers)
        };
        return res;
    }, {});
}

function sanitizeHideouts(hideouts: string[]): string[] {
    const availableHideouts: string[] = HIDEOUT_CONSTANTS.hideouts.map((hideout: any) => hideout.id);
    return hideouts.filter(hideout => availableHideouts.find(item => item === hideout));
}

function sanitizeRooms(rooms: IIncursionRoom[], availableRooms: any): IIncursionRoom[] {
    return rooms
        .filter((room: IIncursionRoom) => !!availableRooms[room.id] && availableRooms[room.id].min <= room.tier)
        .map((room: IIncursionRoom) => ({id: room.id, tier: Math.min(room.tier, availableRooms[room.id].max)}));
}

export function sanitizeTrackerData(data: any): any {
    let sanitized: any = {};
    if (typeof data === 'object') {
        if (
            data.hasOwnProperty('hideout')
            && data.hideout.hasOwnProperty('unlocked')
            && Array.isArray(data.hideout.unlocked)) {
            // Sanitize unlocked hideouts array
            sanitized = {...sanitized, hideout: {unlocked: sanitizeHideouts(data.hideout.unlocked)}};
        }
        if (
            data.hasOwnProperty('incursion')
            && (
                (data.incursion.hasOwnProperty('completed') && Array.isArray(data.incursion.completed))
                || (data.incursion.hasOwnProperty('in_progress') && Array.isArray(data.incursion.in_progress))
            )
        ) {
            const availableRooms: any = getRoomsTierBoundaries(INCURSION_CONSTANTS.rooms);
            sanitized = {...sanitized, incursion: {}};
            if (data.incursion.hasOwnProperty('completed') && Array.isArray(data.incursion.completed)) {
                // Sanitize completed incursion rooms array
                sanitized = {
                    ...sanitized,
                    incursion: {
                        ...sanitized.incursion,
                        completed: sanitizeRooms(data.incursion.completed, availableRooms)
                    }
                };
            }
            if (data.incursion.hasOwnProperty('in_progress') && Array.isArray(data.incursion.in_progress)) {
                // Sanitize in progress incursion rooms array
                sanitized = {
                    ...sanitized,
                    incursion: {
                        ...sanitized.incursion,
                        in_progress: sanitizeRooms(data.incursion.in_progress, availableRooms)
                    }
                };
            }
        }
    }
    return sanitized;
}