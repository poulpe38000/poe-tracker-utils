import HIDEOUT_CONSTANTS from 'constants/hideout.constants';
import INCURSION_CONSTANTS from 'constants/incursion.constants';

export function sanitizeTrackerData(data) {
    let sanitized = {};
    if (typeof data === 'object') {
        if (
            data.hasOwnProperty('hideout')
            && data.hideout.hasOwnProperty('unlocked')
            && Array.isArray(data.hideout.unlocked)) {
            // Sanitize unlocked hideouts array
            const availableHideouts = HIDEOUT_CONSTANTS.hideouts.map(hideout => hideout.id);
            const sanitizedHideouts = data.hideout.unlocked.filter(hideout => availableHideouts.find(item => item === hideout));
            sanitized = {
                ...sanitized,
                hideout: {unlocked: sanitizedHideouts}
            }
        }
        if (
            data.hasOwnProperty('incursion')
            && (
                (data.incursion.hasOwnProperty('completed') && Array.isArray(data.incursion.completed))
                || (data.incursion.hasOwnProperty('in_progress') && Array.isArray(data.incursion.in_progress))
            )
        ) {
            const nonUpgradableKeys = Object.keys(INCURSION_CONSTANTS.rooms.non_upgradeable);
            const upgradableKeys = Object.keys(INCURSION_CONSTANTS.rooms.upgradeable);
            const availableRooms = Object.assign({},
                nonUpgradableKeys.reduce((res, key) => {
                    const roomTiers = INCURSION_CONSTANTS.rooms.non_upgradeable[key].map(room => room.tier);
                    res[key] = {
                        min: Math.min(...roomTiers),
                        max: Math.max(...roomTiers)
                    };
                    return res;
                }, {}),
                upgradableKeys.reduce((res, key) => {
                    const roomTiers = INCURSION_CONSTANTS.rooms.upgradeable[key].map(room => room.tier);
                    res[key] = {
                        min: Math.min(...roomTiers),
                        max: Math.max(...roomTiers)
                    };
                    return res;
                }, {}),
            );
            sanitized = {
                ...sanitized,
                incursion: {}
            };
            if (data.incursion.hasOwnProperty('completed') && Array.isArray(data.incursion.completed)) {
                // Sanitize completed incursion rooms array
                const sanitizedCompleted = data.incursion.completed
                    .filter(room => !!availableRooms[room.id] && availableRooms[room.id].min <= room.tier)
                    .map(room => ({id: room.id, tier: Math.min(room.tier, availableRooms[room.id].max)}));
                sanitized = {
                    ...sanitized,
                    incursion: {
                        ...sanitized.incursion,
                        completed: sanitizedCompleted
                    }
                };
            }
            if (data.incursion.hasOwnProperty('in_progress') && Array.isArray(data.incursion.in_progress)) {
                // Sanitize in progress incursion rooms array
                const sanitizedInProgress = data.incursion.in_progress
                    .filter(room => !!availableRooms[room.id] && availableRooms[room.id].min <= room.tier)
                    .map(room => ({id: room.id, tier: Math.min(room.tier, availableRooms[room.id].max)}));
                sanitized = {
                    ...sanitized,
                    incursion: {
                        ...sanitized.incursion,
                        in_progress: sanitizedInProgress
                    }
                };
            }
        }
    }
    return sanitized;
}