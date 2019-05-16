import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Typography} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import {incursionRoomCompleted, incursionRoomIncomplete} from 'store/incursion/actions';

class IncursionRoom extends React.Component {

    completedRoom = (roomId) => () => {
        this.props.completedRoom(roomId);
    };

    incompleteRoom = (roomId) => () => {
        this.props.incompleteRoom(roomId);
    };

    render() {
        const room = this.props.room;
        const roomTier = room.tier !== 0 ? `T${room.tier} ` : '';
        return (
            <div>
                <Typography variant="body1">
                    {this.props.completed.findIndex((roomId) => roomId === room.id) !== -1 ? (
                            <CheckIcon onClick={this.incompleteRoom(room.id)}/>
                        ) : (
                            <CloseIcon onClick={this.completedRoom(room.id)}/>
                        )}
                    {roomTier}{room.name}
                </Typography>
            </div>
        );
    }
}


IncursionRoom.propTypes = {
    room: PropTypes.object.isRequired,
    completed: PropTypes.array.isRequired,
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
