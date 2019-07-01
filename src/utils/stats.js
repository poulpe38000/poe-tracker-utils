import HIDEOUT_CONSTANTS from 'data/hideout.constants';
import INCURSION_CONSTANTS from 'data/incursion.constants';
import countBy from 'lodash/countBy';
import {getBaseRooms, getTieredRooms, validateInProgressIncursion} from 'utils/incursion';

export function getHideoutMainStats(unlockedHideouts) {
    return {
        unlocked: unlockedHideouts.filter(hideout => {
            return HIDEOUT_CONSTANTS.hideouts.findIndex(item => item.id === hideout) !== -1
        }).length,
        total: HIDEOUT_CONSTANTS.hideouts.length,
    };
}

export function getHideoutByRarityStats(unlockedHideouts) {
    const byRarity = countBy(HIDEOUT_CONSTANTS.hideouts, (item) => item.rarity);
    return Object
        .keys(byRarity)
        .reduce((result, rarity) => {
            const unlockedByRarity = unlockedHideouts
                .filter(hideout => {
                    return HIDEOUT_CONSTANTS.hideouts
                        .findIndex(item => item.id === hideout && item.rarity.toString() === rarity) !== -1;
                });
            result[rarity] = {
                unlocked: unlockedByRarity.length,
                total: byRarity[rarity],
            };
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

    const currentRank = INCURSION_CONSTANTS.rank.find(rank => totalCompleted >= rank.min && totalCompleted <= rank.max);
    const futureRank = INCURSION_CONSTANTS.rank.find(rank => totalFuture >= rank.min && totalFuture <= rank.max);
    return {
        in_progress: totalInProgress,
        completed: totalCompleted,
        future: totalFuture,
        current_rank: currentRank.rank,
        future_rank: futureRank.rank,
        total: totalBaseRooms + totalTieredRooms,
    }
}

function countRooms(rooms) {
    return Object
        .keys(rooms)
        .reduce((result, roomKey) => (result + INCURSION_CONSTANTS.rooms[roomKey]
                .filter(item => item.tier <= rooms[roomKey])
                .length
        ), 0);
}