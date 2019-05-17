import React from 'react';
import {connect} from 'react-redux';
import {incursionRoomValidateInProgress} from 'store/incursion/actions';
import {IncursionBaseRooms, IncursionTieredRooms} from 'components/Incursion/index';
import {Button} from '@material-ui/core';

class IncursionTable extends React.Component {

    handleValidateInProgress = () => this.props.incursionRoomValidateInProgress();

    render() {
        return (
            <React.Fragment>
                <Button onClick={this.handleValidateInProgress}>Validate Progression</Button>
                <IncursionBaseRooms/>
                <IncursionTieredRooms/>
            </React.Fragment>
        );
    }
}

export default connect(
    null,
    dispatch => ({
        incursionRoomValidateInProgress: () => dispatch(incursionRoomValidateInProgress()),
    })
)(IncursionTable);