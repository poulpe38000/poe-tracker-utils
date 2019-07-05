import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import withStyles from '@material-ui/core/styles/withStyles';

import RankHeader from 'components/pages/Incursion/Rank/RankHeader';
import RankDetails from 'components/pages/Incursion/Rank/RankDetails';

const styles = ({palette}) => ({
    root: {
        backgroundColor: palette.background.popper,
    },
});

class RankContainer extends React.Component {
    state = {
        expanded: false
    };

    handleExpand = (event, expand) => {
        this.setState({expanded: expand});
    };

    render() {
        const {classes} = this.props;
        const {expanded} = this.state;
        return (
            <Box>
                <ExpansionPanel elevation={1} className={classes.root} square onChange={this.handleExpand}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                        <RankHeader expanded={expanded}/>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <RankDetails/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Box>
        );
    }
}

export default withStyles(styles)(RankContainer);
