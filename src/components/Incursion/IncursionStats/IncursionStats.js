import React from 'react';
import {connect} from 'react-redux';
import Typography from '@material-ui/core/Typography';
import INCURSION_CONSTANTS from 'constants/incursion.constants';
import Tooltip from '@material-ui/core/Tooltip';

function getIncursionStats(inProgressRooms, completedRooms) {
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

class IncursionStats extends React.Component {

    render() {
        const {inProgressRooms, completedRooms} = this.props;
        const stats = getIncursionStats(inProgressRooms, completedRooms);
        return (
            <Tooltip title={
                <React.Fragment>
                    <Typography component="div" variant="caption">Completed: {stats.completed} (R{stats.current_rank})</Typography>
                    <Typography component="div" variant="caption">In progress: {stats.in_progress}</Typography>
                    <Typography component="div" variant="caption">Target: {stats.future} (R{stats.future_rank})</Typography>
                    <Typography component="div" variant="caption">Total: {stats.total}</Typography>
                </React.Fragment>
            }>
                <Typography variant="caption">
                    Incursions: {stats.completed}/{stats.total}
                </Typography>
            </Tooltip>
        );
    }
}

export default connect(
    state => ({
        inProgressRooms: state.incursion.in_progress,
        completedRooms: state.incursion.completed,
    })
)(IncursionStats);