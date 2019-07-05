import React from 'react'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {getIncursionRankStats, getIncursionStats} from 'components/pages/Incursion/shared/functions';

const styles = ({typography}) => ({
    label: {
        fontWeight: typography.fontWeightMedium,
    },
});

class RankDetails extends React.Component {

    render() {
        const {classes, inProgressRooms, completedRooms} = this.props;

        const stats = getIncursionStats(inProgressRooms, completedRooms);
        const rankStats = getIncursionRankStats(inProgressRooms, completedRooms);

        const inProgressLabel = `# rooms on current temple: ${stats.in_progress}`;
        const deltaLabel = `# rooms on current temple not yet completed: ${stats.future-stats.completed}`;
        const completedLabel = `# completed rooms: ${stats.completed} / ${stats.total}`;
        const futureLabel = `# completed rooms after current incursion: ${stats.future} / ${stats.total}`;

        const currentRankLabel = `Current Alva rank: ${rankStats.current_rank}`;
        const futureRankLabel = `Alva rank after current incursion: ${rankStats.future_rank}`;
        return (
            <Box>
                <Box>
                    <Typography className={classes.label}>{inProgressLabel}</Typography>
                </Box>
                <Box>
                    <Typography className={classes.label}>{deltaLabel}</Typography>
                </Box>
                <Box>
                    <Typography className={classes.label}>{completedLabel}</Typography>
                </Box>
                <Box>
                    <Typography className={classes.label}>{futureLabel}</Typography>
                </Box>
                <Box>
                    <Typography className={classes.label}>{currentRankLabel}</Typography>
                </Box>
                <Box>
                    <Typography className={classes.label}>{futureRankLabel}</Typography>
                </Box>
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
)(RankDetails);
