import React from 'react';
import * as PropTypes from 'prop-types';

import HideoutLabel from 'components/pages/Hideout/List/Details/HideoutLabel';
import HideoutRarity from 'components/pages/Hideout/List/Details/HideoutRarity';
import HideoutLocation from 'components/pages/Hideout/List/Details/HideoutLocation';
import ListDetailsContainer from 'components/shared/List/ListDetailsContainer';

class HideoutDetails extends React.Component {
    static propTypes = {
        hideout: PropTypes.object.isRequired,
    };

    render() {
        const {hideout} = this.props;
        return (
            <ListDetailsContainer>
                <HideoutLabel label={hideout.name}/>
                <HideoutRarity rarity={hideout.rarity}/>
                <HideoutLocation location={hideout.location}/>
            </ListDetailsContainer>
        );
    }
}

export default HideoutDetails;