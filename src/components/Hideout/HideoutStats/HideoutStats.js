import React from 'react';
import {connect} from 'react-redux';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

import HIDEOUT_CONSTANTS from 'constants/hideout.constants';
import {getHideoutByRarityStats, getHideoutMainStats} from 'utils/stats';

class HideoutStats extends React.Component {

    render() {
        const {unlockedHideouts} = this.props;
        const mainStats = getHideoutMainStats(unlockedHideouts);
        const byRarityStats = getHideoutByRarityStats(unlockedHideouts);
        return (
            <Tooltip title={
                <React.Fragment>
                    {Object.keys(byRarityStats).map((rarity) => (
                        <div key={rarity}>
                            <Typography variant="caption">
                                {HIDEOUT_CONSTANTS.rarity[rarity]}: {byRarityStats[rarity].unlocked}/{byRarityStats[rarity].total}
                            </Typography>
                        </div>
                    ))}
                </React.Fragment>
            }>
                <Typography variant="caption">
                    Hideouts: {mainStats.unlocked}/{mainStats.total}
                </Typography>
            </Tooltip>
        );
    }
}

export default connect(
    state => ({
        unlockedHideouts: state.hideout.unlocked,
    })
)(HideoutStats);