import React from 'react';
import {Paper, Typography, withStyles} from '@material-ui/core';
import INCURSION_CONSTANTS from 'constants/incursion';
import {IncursionRoom} from 'components/Incursion';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
    },
});

class IncursionBaseRooms extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <Paper className={classes.root}>
                    <Typography>Non-upgradeable rooms</Typography>
                    {INCURSION_CONSTANTS.rooms.non_upgradeable.map((room) => (<IncursionRoom key={room.id} room={room}/>))}
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(IncursionBaseRooms);
