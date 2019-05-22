import React from 'react';
import {List, Paper, Typography, withStyles} from '@material-ui/core';
import INCURSION_CONSTANTS from 'constants/incursion.constants';
import {IncursionRoom, IncursionRoomHeader} from 'components/Incursion';

const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
    },
});

class IncursionBaseRooms extends React.Component {
    render() {
        const roomKeys = Object.keys(INCURSION_CONSTANTS.rooms.non_upgradeable);
        const {classes} = this.props;
        return (
            <React.Fragment>
                <Typography variant="h6">Non-upgradeable rooms</Typography>
                <Paper className={classes.root}>
                    <List>
                        <IncursionRoomHeader/>
                        {roomKeys.map((roomKey) => {
                            const room = INCURSION_CONSTANTS.rooms.non_upgradeable[roomKey];
                            return (<IncursionRoom key={room.id} roomKey={roomKey} room={room}/>);
                        })}
                    </List>
                </Paper>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(IncursionBaseRooms);
