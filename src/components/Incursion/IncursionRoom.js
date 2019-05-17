import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Checkbox, Typography} from '@material-ui/core';
import {incursionRoomToggleCompleted, incursionRoomToggleInProgress} from 'store/incursion/actions';

class IncursionRoom extends React.Component {

    toggleCompleted = (id, tier) => () => {
        this.props.incursionRoomToggleCompleted(id, tier);
    };

    toggleInProgress = (id, tier) => () => {
        this.props.incursionRoomToggleInProgress(id, tier);
    };

    render() {
        const {roomKey, room, completed, inProgress} = this.props;
        const roomTierLabel = room.tier !== 0 ? `T${room.tier} ` : '';
        const isInProgress = !!inProgress.find((inProgressRoom) => (inProgressRoom.id === roomKey && inProgressRoom.tier >= room.tier));
        const isCompleted = !!completed.find((completedRoom) => (completedRoom.id === roomKey && completedRoom.tier >= room.tier));
        return (
            <div>
                <Typography variant="body1">
                    <Checkbox
                        checked={isInProgress}
                        onChange={this.toggleInProgress(roomKey, room.tier)}
                        value="checked"
                    />
                    <Checkbox
                        checked={isCompleted}
                        onChange={this.toggleCompleted(roomKey, room.tier)}
                        value="checked"
                    />
                    {roomTierLabel}{room.name}
                </Typography>
            </div>
        );
    }
}


IncursionRoom.propTypes = {
    roomKey: PropTypes.string.isRequired,
    room: PropTypes.object.isRequired,
};

export default connect(
    state => ({
        completed: state.incursion.completed,
        inProgress: state.incursion.in_progress,
    }),
    dispatch => ({
        incursionRoomToggleCompleted: (roomKey, tier) => (dispatch(incursionRoomToggleCompleted(roomKey, tier))),
        incursionRoomToggleInProgress: (roomKey, tier) => (dispatch(incursionRoomToggleInProgress(roomKey, tier))),
    }),
)(IncursionRoom);
