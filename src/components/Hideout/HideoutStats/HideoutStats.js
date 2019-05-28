import React from 'react';
import {connect} from 'react-redux';
import HIDEOUT_CONSTANTS from 'constants/hideout.constants';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import countBy from 'lodash/countBy';

function getHideoutStats(unlockedHideouts) {
    const byRarity = countBy(HIDEOUT_CONSTANTS.hideouts, (item) => item.rarity);
    const details = Object
        .keys(byRarity)
        .reduce((result, rarity) => {
            const unlockedByRarity = unlockedHideouts
                .filter(hideout => HIDEOUT_CONSTANTS.hideouts.findIndex(item => item.id === hideout && item.rarity.toString() === rarity) !== -1);
            result[rarity] = {
                unlocked: unlockedByRarity.length,
                total: byRarity[rarity],
            };
            return result;
        }, {});
    return {
        unlocked: unlockedHideouts.filter(hideout => HIDEOUT_CONSTANTS.hideouts.findIndex(item => item.id === hideout) !== -1).length,
        total: HIDEOUT_CONSTANTS.hideouts.length,
        details: details
    };
}

class HideoutStats extends React.Component {

    render() {
        const {unlockedHideouts} = this.props;
        const stats = getHideoutStats(unlockedHideouts);
        return (
            <Tooltip title={
                <React.Fragment>
                    {Object.keys(stats.details).map((rarity) => (
                        <div key={rarity}>
                        <Typography variant="caption">
                            {HIDEOUT_CONSTANTS.rarity[rarity]}: {stats.details[rarity].unlocked}/{stats.details[rarity].total}
                        </Typography>
                        </div>
                    ))}
                </React.Fragment>
            }>
                <Typography variant="caption">
                    Hideouts: {stats.unlocked}/{stats.total}
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