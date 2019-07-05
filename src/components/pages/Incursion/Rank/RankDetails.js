import React from 'react'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

const styles = ({typography}) => ({
    label: {
        fontWeight: typography.fontWeightMedium,
    },
});

class RankDetails extends React.Component {
    static propTypes = {
        stats: PropTypes.object.isRequired,
    };

    render() {
        const {classes, stats} = this.props;
        const inProgressLabel = `# rooms on current temple: ${stats.in_progress}`;
        const completedLabel = `# completed rooms: ${stats.completed} / ${stats.total}`;
        const futureLabel = `# completed rooms after current incursion: ${stats.future} / ${stats.total}`;
        const currentRankLabel = `Current Alva rank: ${stats.current_rank}`;
        const futureRankLabel = `Alva rank after current incursion: ${stats.future_rank}`;
        return (
            <Box>
                <Box>
                    <Typography className={classes.label}>{inProgressLabel}</Typography>
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

export default withStyles(styles)(RankDetails);
