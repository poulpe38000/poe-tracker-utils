import React from 'react'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {getIncursionStats} from 'components/pages/Incursion/shared/functions';
import RankLine from 'components/pages/Incursion/Rank/Details/RankLine';

const styles = ({spacing}) => ({
    root: {
        flex: '1 1 100%',
    },
    title: {
        marginBottom: spacing(1),
    },
});

class RankCompletion extends React.Component {

    render() {
        const {classes, inProgressRooms, completedRooms} = this.props;

        const stats = getIncursionStats(inProgressRooms, completedRooms);

        const inProgressLabel = {
            label: '# rooms on current incursion: ',
            value: stats.in_progress,
        };
        const deltaLabel = {
            label: '# rooms not yet completed: ',
            value: stats.future - stats.completed,
        };
        const completedLabel = {
            label: '# completed rooms: ',
            value: `${stats.completed} / ${stats.total}`,
        };
        const futureLabel = {
            label: '# completed rooms after current incursion: ',
            value: `${stats.future} / ${stats.total}`,
        };
        return (
            <Box className={classes.root}>
                <Typography variant={'h6'} className={classes.title}>{'Incursion Progression'}</Typography>
                <RankLine {...inProgressLabel}/>
                <RankLine {...deltaLabel}/>
                <RankLine {...completedLabel}/>
                <RankLine {...futureLabel}/>
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
)(RankCompletion);
