import React from 'react';
import {connect} from 'react-redux';
import HIDEOUT_CONSTANTS from 'constants/hideout.constants';
import Typography from '@material-ui/core/Typography';

function getHideoutStats(unlockedHideouts) {
    return {
        unlocked: unlockedHideouts.filter(hideout => HIDEOUT_CONSTANTS.hideouts.findIndex(item => item.id === hideout) !== -1).length,
        total: HIDEOUT_CONSTANTS.hideouts.length,
    };
}

class HideoutStats extends React.Component {

    render() {
        const {unlockedHideouts} = this.props;
        const stats = getHideoutStats(unlockedHideouts);
        return (
            <Typography variant="caption">
                Hideouts: {stats.unlocked}/{stats.total}
            </Typography>
            );
    }
}

export default connect(
    state => ({
        unlockedHideouts: state.hideout.unlocked,
    })
)(HideoutStats);