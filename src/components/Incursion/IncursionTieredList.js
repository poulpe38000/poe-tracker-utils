import React from 'react';
import {connect} from 'react-redux';
import Divider from '@material-ui/core/Divider';

import {filteredIncursionData, getTieredRooms} from 'utils/incursion';
import IncursionListContainer from 'components/Incursion/IncursionListContainer';
import IncursionTieredGroup from 'components/Incursion/IncursionTieredGroup';


class IncursionTieredList extends React.Component {
    constructor(props) {
        super(props);
        this.roomsList = getTieredRooms();
    }

    render() {
        const {searchText} = this.props;
        const data = filteredIncursionData(this.roomsList, searchText);
        const roomsKeys = Object.keys(data);
        return (
            <React.Fragment>
                {roomsKeys.length > 0 && (
                    <IncursionListContainer title={'Upgradeable rooms'}>
                        {roomsKeys
                            .map((roomsKey, idx) => (
                                    <React.Fragment key={roomsKey}>
                                        <IncursionTieredGroup roomKey={roomsKey} rooms={data[roomsKey]}/>
                                        {idx < roomsKeys.length - 1 && <Divider/>}
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

export default connect(
    state => ({
        searchText: state.incursion.searchText,
    }),
)(IncursionTieredList);
