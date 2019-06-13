import HIDEOUT_CONSTANTS from 'constants/hideout.constants';
import INCURSION_CONSTANTS from 'constants/incursion.constants';

function getRoomsTierBoundaries(rooms) {
    const roomsKeys = Object.keys(rooms);
    return roomsKeys.reduce((res, key) => {
        const roomTiers = rooms[key].map(room => room.tier);
        res[key] = {
            min: Math.min(...roomTiers),
            max: Math.max(...roomTiers)
        };
        return res;
    }, {});
}

function sanitizeHideouts(hideouts) {
    const availableHideouts = HIDEOUT_CONSTANTS.hideouts.map(hideout => hideout.id);
    return hideouts.filter(hideout => availableHideouts.find(item => item === hideout));
}

function sanitizeRooms(rooms, availableRooms) {
    return Object
        .keys(rooms)
        .filter(roomKey => !!availableRooms[roomKey] && availableRooms[roomKey].min <= rooms[roomKey])
        .reduce((result, roomKey) => ({
            ...result,
            [roomKey]: Math.min(rooms[roomKey], availableRooms[roomKey].max)
        }), {});
}

export function sanitizeTrackerData(data) {
    let sanitized = {};
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
                (data.incursion.hasOwnProperty('in_progress') && typeof data.incursion.in_progress === 'object')
                || (data.incursion.hasOwnProperty('completed') && typeof data.incursion.completed === 'object')
            )
        ) {
            const availableRooms = getRoomsTierBoundaries(INCURSION_CONSTANTS.rooms);
            sanitized = {...sanitized, incursion: {}};
            if (data.incursion.hasOwnProperty('in_progress') && typeof data.incursion.in_progress === 'object') {
                // Sanitize in progress incursion rooms array
                sanitized = {
                    ...sanitized,
                    incursion: {
                        ...sanitized.incursion,
                        in_progress: sanitizeRooms(data.incursion.in_progress, availableRooms)
                    }
                };
            }
            if (data.incursion.hasOwnProperty('completed') && typeof data.incursion.completed === 'object') {
                // Sanitize completed incursion rooms array
                sanitized = {
                    ...sanitized,
                    incursion: {
                        ...sanitized.incursion,
                        completed: sanitizeRooms(data.incursion.completed, availableRooms)
                    }
                };
            }
        }
    }
    return sanitized;
}