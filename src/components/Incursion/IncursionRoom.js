import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Checkbox, ListItem, Typography, withStyles} from '@material-ui/core';
import {incursionRoomToggleCompleted, incursionRoomToggleInProgress} from 'store/incursion/actions';

const styles = theme => ({
    root: {display: 'flex',},
    itemCheckbox: {
        width: '64px',
    },
    itemTextContainer: {
        flex: '1 1 100%',
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column'
        }
    },
    itemText: {
        flex: '1 1 100%',
        alignSelf: 'center',
        paddingLeft: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
    },
});

class IncursionRoom extends React.Component {

    static propTypes = {
        roomKey: PropTypes.string.isRequired,
        room: PropTypes.object.isRequired,
    };

    toggleCompleted = (id, tier) => () => {
        this.props.incursionRoomToggleCompleted(id, tier);
    };

    toggleInProgress = (id, tier) => () => {
        this.props.incursionRoomToggleInProgress(id, tier);
    };

    render() {
        const {classes, roomKey, room, completed, inProgress} = this.props;
        const roomTierLabel = room.tier !== 0 ? `T${room.tier} ` : '';
        const isInProgress = !!inProgress.find((inProgressRoom) => (inProgressRoom.id === roomKey && inProgressRoom.tier >= room.tier));
        const isCompleted = !!completed.find((completedRoom) => (completedRoom.id === roomKey && completedRoom.tier >= room.tier));
        return (
            <ListItem dense disableGutters className={classes.root}>
                <Checkbox
                    className={classes.itemCheckbox}
                    checked={isInProgress}
                    onChange={this.toggleInProgress(roomKey, room.tier)}
                    value="checked"
                />
                <Checkbox
                    className={classes.itemCheckbox}
                    checked={isCompleted}
                    onChange={this.toggleCompleted(roomKey, room.tier)}
                    value="checked"
                />
                <div className={classes.itemTextContainer}>
                    <Typography variant="subtitle2" className={classes.itemText}>
                        {roomTierLabel}{room.name}
                    </Typography>
                    <Typography variant="caption" className={classes.itemText}>
                        {room.notable.length > 0 && (
                            <React.Fragment>
                                {room.notable.map(item => (<div>{item}</div>))}
                            </React.Fragment>
                        )}
                    </Typography>
                    <Typography variant="caption" className={classes.itemText}>
                        {room.mods.length > 0 && (
                            <React.Fragment>
                                {room.mods.map(item => (<div>{item}</div>))}
                            </React.Fragment>
                        )}
                    </Typography>
                </div>
            </ListItem>
        );
    }
}

export default connect(
    state => ({
        completed: state.incursion.completed,
        inProgress: state.incursion.in_progress,
    }),
    dispatch => ({
        incursionRoomToggleCompleted: (roomKey, tier) => (dispatch(incursionRoomToggleCompleted(roomKey, tier))),
        incursionRoomToggleInProgress: (roomKey, tier) => (dispatch(incursionRoomToggleInProgress(roomKey, tier))),
    }),
)(withStyles(styles)(IncursionRoom));
