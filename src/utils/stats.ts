import HIDEOUT_CONSTANTS from 'constants/hideout.constants';
import INCURSION_CONSTANTS from 'constants/incursion.constants';
import countBy from 'lodash/countBy';
import {getBaseRooms, getTieredRooms} from 'utils/incursion';
import {IIncursionStateRoom} from '../store/incursion/state';

export function getHideoutMainStats(unlockedHideouts: string[]): any {
    return {
        unlocked: unlockedHideouts.filter((hideout: string) => {
            return HIDEOUT_CONSTANTS.hideouts.findIndex((item: any) => item.id === hideout) !== -1
        }).length,
        total: HIDEOUT_CONSTANTS.hideouts.length,
    };
}

export function getHideoutByRarityStats(unlockedHideouts: string[]): any {
    const byRarity: any = countBy(HIDEOUT_CONSTANTS.hideouts, (item) => item.rarity);
    return Object
        .keys(byRarity)
        .reduce((result: any, rarity: string) => {
            const unlockedByRarity: any = unlockedHideouts
                .filter(hideout => {
                    return HIDEOUT_CONSTANTS.hideouts
                        .findIndex((item: any) => item.id === hideout && item.rarity.toString() === rarity) !== -1;
                });
            result[rarity] = {
                unlocked: unlockedByRarity.length,
                total: byRarity[rarity],
            };
            return result;
        }, {});
}

export function getIncursionStats(inProgressRooms: IIncursionStateRoom[], completedRooms: IIncursionStateRoom[]) {
    const baseRooms: any = getBaseRooms();
    const tieredRooms: any = getTieredRooms();

    const totalBaseRooms: number = Object.keys(baseRooms)
        .reduce((result: any[], key: string) => ([...result, ...baseRooms[key]]), []).length;
    const totalTieredRooms: number = Object.keys(tieredRooms)
        .reduce((result: any[], key: string) => ([...result, ...tieredRooms[key]]), []).length;

    const inProgressFiltered: IIncursionStateRoom[] = inProgressRooms.filter(room => INCURSION_CONSTANTS.rooms[room.id]);
    const completedFiltered: IIncursionStateRoom[] = completedRooms.filter(room => INCURSION_CONSTANTS.rooms[room.id]);

    const totalInProgress: number = inProgressFiltered.reduce((result: number, room: IIncursionStateRoom) => {
        return result + INCURSION_CONSTANTS.rooms[room.id].filter((item: any) => item.tier <= room.tier).length;
    }, 0);
    const totalCompleted: number = completedFiltered.reduce((result: number, room: IIncursionStateRoom) => {
        return result + INCURSION_CONSTANTS.rooms[room.id].filter((item: any) => item.tier <= room.tier).length;
    }, 0);

    let futureFiltered = completedFiltered.reduce((result: IIncursionStateRoom[], room: IIncursionStateRoom) => {
        const inProgressOverride: IIncursionStateRoom | undefined = inProgressFiltered.find((item: IIncursionStateRoom) => item.id === room.id && item.tier > room.tier);
        if (!!inProgressOverride) {
            return [...result, inProgressOverride];
        }
        return [...result, room];
    }, []);
    futureFiltered = [
        ...futureFiltered,
        ...inProgressFiltered.filter((item: IIncursionStateRoom) => completedFiltered.findIndex(compl => compl.id === item.id) === -1)
    ];
    const totalFuture: number = futureFiltered.reduce((result, room) => {
        return result + INCURSION_CONSTANTS.rooms[room.id].filter((item: any) => item.tier <= room.tier).length;
    }, 0);

    const currentRank: any = INCURSION_CONSTANTS.rank.find((rank: any) => totalCompleted >= rank.min && totalCompleted <= rank.max);
    const futureRank: any = INCURSION_CONSTANTS.rank.find((rank: any)  => totalFuture >= rank.min && totalFuture <= rank.max);
    return {
        in_progress: totalInProgress,
        completed: totalCompleted,
        future: totalFuture,
        current_rank: currentRank.rank,
        future_rank: futureRank.rank,
        total: totalBaseRooms + totalTieredRooms,
    }
}
