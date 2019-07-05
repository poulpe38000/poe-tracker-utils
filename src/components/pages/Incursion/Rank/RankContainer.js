import React from 'react'
import {compose} from 'redux';
import {connect} from 'react-redux';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import withStyles from '@material-ui/core/styles/withStyles';

import RankHeader from 'components/pages/Incursion/Rank/RankHeader';
import {getIncursionStats} from 'components/pages/Incursion/shared/functions';
import RankDetails from 'components/pages/Incursion/Rank/RankDetails';

const styles = ({palette}) => ({
    root: {
        backgroundColor: palette.background.popper,
    },
});

class RankContainer extends React.Component {

    render() {
        const {classes, inProgressRooms, completedRooms} = this.props;
        const stats = getIncursionStats(inProgressRooms, completedRooms);
        return (
            <Box>
                <ExpansionPanel elevation={1} className={classes.root} square>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                        <RankHeader title={'Alva Rank'} stats={stats}/>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <RankDetails stats={stats}/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
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
)(RankContainer);
