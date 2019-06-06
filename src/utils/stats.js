import HIDEOUT_CONSTANTS from 'constants/hideout.constants';
import INCURSION_CONSTANTS from 'constants/incursion.constants';
import countBy from 'lodash/countBy';
import {getBaseRooms, getTieredRooms} from 'utils/incursion';

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

    const inProgressFiltered = inProgressRooms.filter(room => INCURSION_CONSTANTS.rooms[room.id]);
    const completedFiltered = completedRooms.filter(room => INCURSION_CONSTANTS.rooms[room.id]);

    const totalInProgress = inProgressFiltered.reduce((result, room) => {
        return result + INCURSION_CONSTANTS.rooms[room.id].filter(item => item.tier <= room.tier).length;
    }, 0);
    const totalCompleted = completedFiltered.reduce((result, room) => {
        return result + INCURSION_CONSTANTS.rooms[room.id].filter(item => item.tier <= room.tier).length;
    }, 0);

    let futureFiltered = completedFiltered.reduce((result, room) => {
        const inProgressOverride = inProgressFiltered.find(item => item.id === room.id && item.tier > room.tier);
        if (!!inProgressOverride) {
            return [...result, inProgressOverride];
        }
        return [...result, room];
    }, []);
    futureFiltered = [
        ...futureFiltered,
        ...inProgressFiltered.filter(item => completedFiltered.findIndex(compl => compl.id === item.id) === -1)
    ];
    const totalFuture = futureFiltered.reduce((result, room) => {
        return result + INCURSION_CONSTANTS.rooms[room.id].filter(item => item.tier <= room.tier).length;
    }, 0);

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
