import React from 'react'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {getIncursionRankStats, getRankLabel, isMaxRank} from 'components/pages/Incursion/shared/functions';
import RankLine from 'components/pages/Incursion/Rank/Details/RankLine';

const styles = ({spacing}) => ({
    root: {
        flex: '1 1 100%',
    },
    title: {
        marginBottom: spacing(1),
    },
});

class RankAdvancement extends React.Component {

    render() {
        const {classes, inProgressRooms, completedRooms} = this.props;

        const rankStats = getIncursionRankStats(inProgressRooms, completedRooms);

        const currentRankLabel = {
            label: 'Current Alva rank: ',
            value: getRankLabel(rankStats.current_rank),
        };
        const futureRankLabel = {
            label: 'Alva rank after current incursion: ',
            value: getRankLabel(rankStats.future_rank),
        };
        return (
            <Box className={classes.root}>
                <Typography variant={'h6'} className={classes.title}>{'Rank Advancement'}</Typography>
                <RankLine {...currentRankLabel}/>
                {!isMaxRank(rankStats.current_rank) && (<RankLine {...futureRankLabel}/>)}
            </Box>
        );
    }
}

export default compose(
    connect(
        state => ({
            inProgressRooms: state.incursion.in_progress,
            completedRooms: state.incursion.completed,
        })
    ),
    withStyles(styles),
)(RankAdvancement);
