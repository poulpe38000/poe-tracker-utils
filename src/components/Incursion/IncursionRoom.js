import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Typography} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import {incursionRoomCompleted, incursionRoomIncomplete} from 'store/incursion/actions';

class IncursionRoom extends React.Component {

    completedRoom = (id, tier) => () => {
        this.props.completedRoom({id, tier});
    };

    incompleteRoom = (id, tier) => () => {
        this.props.incompleteRoom({id, tier});
    };

    render() {
        const {room} = this.props;
        const roomTier = room.tier !== 0 ? `T${room.tier} ` : '';
        return (
            <div>
                <Typography variant="body1">
                    {this.props.completed.findIndex((completedRoom) => completedRoom.id === room.id) !== -1 ? (
                            <CheckIcon onClick={this.incompleteRoom(room.id, room.tier)}/>
                        ) : (
                            <CloseIcon onClick={this.completedRoom(room.id, room.tier)}/>
                        )}
                    {roomTier}{room.name}
                </Typography>
            </div>
        );
    }
}


IncursionRoom.propTypes = {
    room: PropTypes.object.isRequired,
    onInProgress: PropTypes.func,
    onNotInProgress: PropTypes.func,
};

export default connect(
    state => ({
        completed: state.incursion.completed,
    }),
    dispatch => ({
        completedRoom: roomId => (dispatch(incursionRoomCompleted(roomId))),
        incompleteRoom: roomId => (dispatch(incursionRoomIncomplete(roomId))),
    }),
)(IncursionRoom);
