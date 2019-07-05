import {ranks} from 'components/pages/Incursion/shared/constants';
import INCURSION_ROOMS from 'data/incursion-rooms';
import {getBaseRooms, getTieredRooms, validateInProgressIncursion} from 'utils/incursion';

function findText(text, rooms) {
    return text === ''
        || rooms.some((room) => room.name.toLowerCase().search(text.toLowerCase()) !== -1);
}

export function filterIncursions(rooms, text) {
    return Object
        .keys(rooms)
        .reduce((result, roomsKey) => {
            if (findText(text, rooms[roomsKey])) {
                result[roomsKey] = rooms[roomsKey];
            }
            return result;
        }, {});
}

export function getIncursionStats(inProgressRooms, completedRooms) {
    const baseRooms = getBaseRooms();
    const tieredRooms = getTieredRooms();

    const totalBaseRooms = Object.keys(baseRooms)
        .reduce((result, key) => ([...result, ...baseRooms[key]]), []).length;
    const totalTieredRooms = Object.keys(tieredRooms)
        .reduce((result, key) => ([...result, ...tieredRooms[key]]), []).length;

    const totalInProgress = countRooms(inProgressRooms);
    const totalCompleted = countRooms(completedRooms);

    const futureCompletedRooms = validateInProgressIncursion(inProgressRooms, completedRooms);
    const totalFuture = countRooms(futureCompletedRooms);

    return {
        in_progress: totalInProgress,
        completed: totalCompleted,
        future: totalFuture,
        total: totalBaseRooms + totalTieredRooms,
    }
}

export function getIncursionRankStats(inProgressRooms, completedRooms) {
    const totalCompleted = countRooms(completedRooms);

    const futureCompletedRooms = validateInProgressIncursion(inProgressRooms, completedRooms);
    const totalFuture = countRooms(futureCompletedRooms);

    const currentRank = ranks.find(rank => totalCompleted >= rank.min && totalCompleted <= rank.max);
    const futureRank = ranks.find(rank => totalFuture >= rank.min && totalFuture <= rank.max);
    return {
        current_rank: currentRank.rank,
        future_rank: futureRank.rank,
    }
}

export function isMaxRank(rank) {
    const rankArray = ranks.map(elt => elt.rank);
    const maxRank = Math.max(...rankArray);
    return maxRank === rank;
}

export function getRankLabel(rank) {
    if(isMaxRank(rank)) {
        return `${rank} (MAX)`;
    }
    return rank + '';
}

function countRooms(rooms) {
    return Object
        .keys(rooms)
        .reduce((result, roomKey) => (result + INCURSION_ROOMS[roomKey]
                .filter(item => item.tier <= rooms[roomKey])
                .length
        ), 0);
}