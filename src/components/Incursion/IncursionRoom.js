import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

import {incursionActions} from 'store/incursion/actions';

const styles = ({breakpoints, spacing}) => ({
    root: {display: 'flex',},
    itemCheckbox: {
        minWidth: '64px',
        width: '64px',
        textAlign: 'center',
    },
    itemTextContainer: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',
        [breakpoints.down('xs')]: {
            flexDirection: 'column'
        },
    },
    itemText: {
        flex: '1 1 100%',
        alignSelf: 'center',
        paddingLeft: spacing(1),
        paddingRight: spacing(1),
        [breakpoints.down('xs')]: {
            alignSelf: 'auto',
        },
    },
    itemDetails: {
        [breakpoints.down('xs')]: {
            position: 'relative',
            marginLeft: spacing(1),
            '&::before': {
                content: '"-"',
                position: 'absolute',
                left: spacing(-1),
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
        this.props.toggleCompleted({id, tier});
    };

    toggleInProgress = (id, tier) => () => {
        this.props.toggleInProgress({id, tier});
    };

    render() {
        const {classes, roomKey, room, completed, inProgress} = this.props;
        const roomTierLabel = room.tier !== 0 ? `T${room.tier} ` : '';
        const isInProgress = !!inProgress.find((inProgressRoom) => (inProgressRoom.id === roomKey && inProgressRoom.tier >= room.tier));
        const isCompleted = !!completed.find((completedRoom) => (completedRoom.id === roomKey && completedRoom.tier >= room.tier));
        return (
            <ListItem dense disableGutters className={classes.root}>
                <Box className={classes.itemCheckbox}>
                    <Checkbox
                        checked={isInProgress}
                        onChange={this.toggleInProgress(roomKey, room.tier)}
                        value="checked"
                    />
                </Box>
                <Box className={classes.itemCheckbox}>
                    <Checkbox
                        checked={isCompleted}
                        onChange={this.toggleCompleted(roomKey, room.tier)}
                        value="checked"
                    />
                </Box>
                <Box className={classes.itemTextContainer}>
                    <Typography variant="subtitle2" className={classes.itemText}>
                        {roomTierLabel}{room.name}
                    </Typography>
                    <Typography variant="caption" className={classes.itemText}>
                        {room.notable.length > 0 && (
                            <React.Fragment>
                                {room.notable.map((item, key) => (
                                    <Box key={key} className={classes.itemDetails}>{item}</Box>))}
                            </React.Fragment>
                        )}
                    </Typography>
                    <Typography variant="caption" className={classes.itemText}>
                        {room.mods.length > 0 && (
                            <React.Fragment>
                                {room.mods.map((item, key) => (
                                    <Box key={key} className={classes.itemDetails}>{item}</Box>))}
                            </React.Fragment>
                        )}
                    </Typography>
                </Box>
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
