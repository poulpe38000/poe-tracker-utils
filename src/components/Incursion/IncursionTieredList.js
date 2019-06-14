import React from 'react';
import * as PropTypes from 'prop-types';

import IncursionListContainer from 'components/Incursion/IncursionListContainer';
import IncursionTieredGroup from 'components/Incursion/IncursionTieredGroup';


class IncursionTieredList extends React.Component {
    static propTypes = {
        items: PropTypes.object.isRequired,
    };

    render() {
        const {items} = this.props;
        const roomsKeys = Object.keys(items);
        return (
            <React.Fragment>
                {roomsKeys.length > 0 && (
                    <IncursionListContainer title={'Upgradeable rooms'}>
                        {roomsKeys
                            .map((roomsKey, idx) => (
                                    <React.Fragment key={roomsKey}>
                                        <IncursionTieredGroup
                                            roomKey={roomsKey}
                                            rooms={items[roomsKey]}
                                            noDivider={idx === roomsKeys.length - 1}
                                        />
                                    </React.Fragment>
                                )
                            )
                        }
                    </IncursionListContainer>
                )}
            </React.Fragment>

        );
    }
}

export default IncursionTieredList;
