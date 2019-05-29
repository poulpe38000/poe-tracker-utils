import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Checkbox, ListItem, Typography, withStyles} from '@material-ui/core';
import {incursionRoomToggleCompleted, incursionRoomToggleInProgress} from 'store/incursion/actions';

const styles = theme => ({
    root: {display: 'flex',},
    itemCheckbox: {
        width: '64px',
        textAlign: 'center',
    },
    itemTextContainer: {
        flex: '1 1 100%',
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column'
        },
    },
    itemText: {
        flex: '1 1 100%',
        alignSelf: 'center',
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        [theme.breakpoints.down('xs')]: {
            alignSelf: 'auto',
        },
    },
    itemDetails: {
        [theme.breakpoints.down('xs')]: {
            position: 'relative',
            marginLeft: theme.spacing(1),
            '&::before': {
                content: '"-"',
                position: 'absolute',
                left: theme.spacing(-1),
            }
        },
    }
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
                <div className={classes.itemCheckbox}>
                <Checkbox
                    checked={isInProgress}
                    onChange={this.toggleInProgress(roomKey, room.tier)}
                    value="checked"
                />
                </div>
                <div className={classes.itemCheckbox}>
                <Checkbox
                    checked={isCompleted}
                    onChange={this.toggleCompleted(roomKey, room.tier)}
                    value="checked"
                />
                </div>
                <div className={classes.itemTextContainer}>
                    <Typography variant="subtitle2" className={classes.itemText}>
                        {roomTierLabel}{room.name}
                    </Typography>
                    <Typography variant="caption" className={classes.itemText}>
                        {room.notable.length > 0 && (
                            <React.Fragment>
                                {room.notable.map((item, key) => (<div key={key} className={classes.itemDetails}>{item}</div>))}
                            </React.Fragment>
                        )}
                    </Typography>
                    <Typography variant="caption" className={classes.itemText}>
                        {room.mods.length > 0 && (
                            <React.Fragment>
                                {room.mods.map((item, key) => (<div key={key} className={classes.itemDetails}>{item}</div>))}
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