import React from 'react';
import INCURSION_CONSTANTS from 'constants/incursion';
import {IncursionTieredRoom} from 'components/Incursion';
import {Divider, Paper, Typography, withStyles} from '@material-ui/core';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
    },
});

class IncursionTieredRooms extends React.Component {
    render() {
        const {classes} = this.props;
        const roomsKeys = Object.keys(INCURSION_CONSTANTS.rooms.upgradeable);
        return (
            <React.Fragment>
                <Typography variant="h6">Upgradeable rooms</Typography>
                <Paper className={classes.root}>
                {
                    roomsKeys.map((roomsKey, idx) => (
                            <React.Fragment key={roomsKey}>
                                <IncursionTieredRoom roomKey={roomsKey} rooms={INCURSION_CONSTANTS.rooms.upgradeable[roomsKey]}/>
                                {idx < roomsKeys.length -1 && <Divider/>}
                            </React.Fragment>
                        )
                    )
                }
                </Paper>
            </React.Fragment>

        );
    }
}

export default withStyles(styles)(IncursionTieredRooms);
