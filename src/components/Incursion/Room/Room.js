import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import ListItem from '@material-ui/core/ListItem';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

import {incursionActions} from 'store/incursion/actions';
import RoomDetails from 'components/Incursion/Room/Details/RoomDetails';
import ListCheckbox from 'components/shared/List/ListCheckbox';

const styles = {
    root: {display: 'flex',},
};

class Room extends React.Component {
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
        return this.props.inProgress.hasOwnProperty(this.props.roomKey)
            && this.props.inProgress[this.props.roomKey] >= this.props.room.tier;
    }

    isCompleted() {
        return this.props.completed.hasOwnProperty(this.props.roomKey)
            && this.props.completed[this.props.roomKey] >= this.props.room.tier;
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
