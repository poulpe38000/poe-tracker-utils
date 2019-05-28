import HIDEOUT_CONSTANTS from 'constants/hideout.constants';
import INCURSION_CONSTANTS from 'constants/incursion.constants';
import countBy from 'lodash/countBy';

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
    const totalNonUpgradeable = Object
        .keys(INCURSION_CONSTANTS.rooms.non_upgradeable)
        .reduce((result, key) => {
            return [
                ...result,
                ...INCURSION_CONSTANTS.rooms.non_upgradeable[key]
            ]
        }, []).length;
    const totalUpgradeable = Object
        .keys(INCURSION_CONSTANTS.rooms.upgradeable)
        .reduce((result, key) => {
            return [
                ...result,
                ...INCURSION_CONSTANTS.rooms.upgradeable[key]
            ]
        }, []).length;
    const inProgressFiltered = inProgressRooms.filter(room => {
        return !!INCURSION_CONSTANTS.rooms.non_upgradeable[room.id]
            || INCURSION_CONSTANTS.rooms.upgradeable[room.id]
    });
    const completedFiltered = completedRooms.filter(room => {
        return !!INCURSION_CONSTANTS.rooms.non_upgradeable[room.id]
            || INCURSION_CONSTANTS.rooms.upgradeable[room.id]
    });
    const totalInProgress = inProgressFiltered.reduce((result, room) => {
        if (INCURSION_CONSTANTS.rooms.non_upgradeable[room.id]) {
            return result + INCURSION_CONSTANTS.rooms.non_upgradeable[room.id].filter(item => item.tier <= room.tier).length;
        }
        if (INCURSION_CONSTANTS.rooms.upgradeable[room.id]) {
            return result + INCURSION_CONSTANTS.rooms.upgradeable[room.id].filter(item => item.tier <= room.tier).length;
        }
        return result;
    }, 0);
    const totalCompleted = completedFiltered.reduce((result, room) => {
        if (INCURSION_CONSTANTS.rooms.non_upgradeable[room.id]) {
            return result + INCURSION_CONSTANTS.rooms.non_upgradeable[room.id].filter(item => item.tier <= room.tier).length;
        }
        if (INCURSION_CONSTANTS.rooms.upgradeable[room.id]) {
            return result + INCURSION_CONSTANTS.rooms.upgradeable[room.id].filter(item => item.tier <= room.tier).length;
        }
        return result;
    }, 0);
    let futureFiltered = completedFiltered.reduce((result, room) => {
        const inProgressOverride = inProgressFiltered.find(item => item.id === room.id && item.tier > room.tier);
        if (!!inProgressOverride) {
            return [
                ...result,
                inProgressOverride
            ];
        }
        return [
            ...result,
            room
        ];
    }, []);
    futureFiltered = [
        ...futureFiltered,
        ...inProgressFiltered.filter(item => completedFiltered.findIndex(compl => compl.id === item.id) === -1)
    ];
    const totalFuture = futureFiltered.reduce((result, room) => {
        if (INCURSION_CONSTANTS.rooms.non_upgradeable[room.id]) {
            return result + INCURSION_CONSTANTS.rooms.non_upgradeable[room.id].filter(item => item.tier <= room.tier).length;
        }
        if (INCURSION_CONSTANTS.rooms.upgradeable[room.id]) {
            return result + INCURSION_CONSTANTS.rooms.upgradeable[room.id].filter(item => item.tier <= room.tier).length;
        }
        return result;
    }, 0);
    const currentRank = INCURSION_CONSTANTS.rank.find(rank => totalCompleted >= rank.min && totalCompleted <= rank.max);
    const futureRank = INCURSION_CONSTANTS.rank.find(rank => totalFuture >= rank.min && totalFuture <= rank.max);
    return {
        in_progress: totalInProgress,
        completed: totalCompleted,
        future: totalFuture,
        current_rank: currentRank.rank,
        future_rank: futureRank.rank,
        total: totalNonUpgradeable + totalUpgradeable,
    }
}
