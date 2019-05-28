import React from 'react';
import {connect} from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import {getIncursionStats} from 'utils/stats';

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