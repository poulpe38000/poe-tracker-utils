import React from 'react';
import {List, Paper, Typography, withStyles} from '@material-ui/core';
import INCURSION_CONSTANTS from 'constants/incursion.constants';
import {IncursionRoom, IncursionRoomHeader} from 'components/Incursion';
import {connect} from 'react-redux';

const styles = theme => ({
    root: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
});

function findText(text, rooms) {
    return text === ''
        || rooms.some(room => room.name.toLowerCase().search(text.toLowerCase()) !== -1);
}

function filteredData(rooms, searchText) {
    return Object.keys(rooms)
        .reduce((result, roomsKey) => {
            if (findText(searchText, rooms[roomsKey])) {
                result[roomsKey] = rooms[roomsKey];
            }
            return result;
        }, {});
}

class IncursionBaseRooms extends React.Component {
    render() {
        const {classes, searchText} = this.props;
        const data = filteredData(INCURSION_CONSTANTS.rooms.non_upgradeable, searchText);
        const roomKeys = Object.keys(data);
        return (
            <React.Fragment>
                <Typography variant="h6">Non-upgradeable rooms</Typography>
                <Paper className={classes.root}>
                    <List>
                        <IncursionRoomHeader/>
                        {roomKeys.map((roomKey) => {
                            const rooms = data[roomKey];
                            return (
                                <React.Fragment key={roomKey} >
                                    {rooms.map((room) => (
                                        <IncursionRoom key={room.id} roomKey={roomKey} room={room}/>))}
                                </React.Fragment>
                            );
                        })}
                    </List>
                </Paper>
            </React.Fragment>
        );
    }
}

export default connect(
    state => ({
        searchText: state.incursion.searchText,
    }),
)(withStyles(styles)(IncursionBaseRooms));
