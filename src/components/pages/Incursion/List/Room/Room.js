import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import ListItem from '@material-ui/core/ListItem';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

import {incursionActions} from 'store/incursion/actions';
import RoomDetails from 'components/pages/Incursion/List/Room/Details/RoomDetails';
import ListCheckbox from 'components/shared/List/ListCheckbox';

const styles = {
    root: {display: 'flex',},
};

class Room extends React.Component {
    static propTypes = {
        roomKey: PropTypes.string.isRequired,
        room: PropTypes.object.isRequired,
    };

    getDispatcherData() {
        const {roomKey, room} = this.props;
        return {
            id: roomKey,
            tier: room.tier,
        };
    }

    toggleCompleted = () => {
        this.props.toggleCompleted(this.getDispatcherData());
    };

    toggleInProgress = () => {
        this.props.toggleInProgress(this.getDispatcherData());
    };

    isInProgress() {
        const {inProgress, roomKey, room} = this.props;
        return inProgress.hasOwnProperty(roomKey)
            && inProgress[roomKey] >= room.tier;
    }

    isCompleted() {
        const {completed, roomKey, room} = this.props;
        return completed.hasOwnProperty(roomKey)
            && completed[roomKey] >= room.tier;
    }

    render() {
        const {classes, room} = this.props;
        const isInProgress = this.isInProgress();
        const isCompleted = this.isCompleted();
        return (
            <ListItem dense disableGutters className={classes.root}>
                <ListCheckbox checked={isInProgress} onChange={this.toggleInProgress}/>
                <ListCheckbox checked={isCompleted} onChange={this.toggleCompleted}/>
                <RoomDetails room={room}/>
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
)(Room);
