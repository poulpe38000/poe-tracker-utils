import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

import {incursionActions} from 'store/incursion/actions';
import IncursionRoomDetails from 'components/Incursion/IncursionRoomDetails';

const styles = {
    root: {display: 'flex',},
    itemCheckbox: {
        minWidth: '64px',
        width: '64px',
        textAlign: 'center',
    },
};

class IncursionRoom extends React.Component {
    static propTypes = {
        roomKey: PropTypes.string.isRequired,
        room: PropTypes.object.isRequired,
    };

    toggleCompleted = () => {
        this.props.toggleCompleted({
            id: this.props.roomKey,
            tier: this.props.room.tier,
        });
    };

    toggleInProgress = () => {
        this.props.toggleInProgress({
            id: this.props.roomKey,
            tier: this.props.room.tier,
        });
    };

    isInProgress() {
        return !!this.props.inProgress
            .find((inProgressRoom) => {
                return inProgressRoom.id === this.props.roomKey
                    && inProgressRoom.tier >= this.props.room.tier;
            });
    }

    isCompleted() {
        return !!this.props.completed
            .find((completedRoom) => {
                return completedRoom.id === this.props.roomKey
                    && completedRoom.tier >= this.props.room.tier;
            });
    }

    render() {
        const {classes, room} = this.props;
        const isInProgress = this.isInProgress();
        const isCompleted = this.isCompleted();
        return (
            <ListItem dense disableGutters className={classes.root}>
                <Box className={classes.itemCheckbox}>
                    <Checkbox
                        checked={isInProgress}
                        onChange={this.toggleInProgress}
                        value="checked"
                    />
                </Box>
                <Box className={classes.itemCheckbox}>
                    <Checkbox
                        checked={isCompleted}
                        onChange={this.toggleCompleted}
                        value="checked"
                    />
                </Box>
                <IncursionRoomDetails room={room}/>
            </ListItem>
        );
    }
}

export default compose(
    connect(
        state => ({
            completed: state.incursion.completed,
            inProgress: state.incursion.in_progress,
        }),
        {
            toggleCompleted: incursionActions.toggleCompleted,
            toggleInProgress: incursionActions.toggleInProgress,
        },
    ),
    withStyles(styles),
)(IncursionRoom);
