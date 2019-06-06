import React from 'react';
import {List, Paper, Typography, withStyles} from '@material-ui/core';
import {IncursionRoom, IncursionRoomHeader} from 'components/Incursion';
import {connect} from 'react-redux';
import {getBaseRooms} from 'utils/incursion';
import ListSubheader from '@material-ui/core/ListSubheader';

const styles = theme => ({
    root: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    header: {
        lineHeight: 'inherit',
        top: 64,
        [theme.breakpoints.down('xs')]: {
            top: 56,
        }
    },
});

function findText(text, rooms) {
    return text === ''
        || rooms.some(room => room.name.toLowerCase().search(text.toLowerCase()) !== -1);
}

function filteredData(rooms, searchText) {
    return Object.keys(rooms)
        .reduce((result, roomsKey) => {
            if (rooms[roomsKey].length === 1 && findText(searchText, rooms[roomsKey])) {
                result[roomsKey] = rooms[roomsKey];
            }
            return result;
        }, {});
}

class IncursionBaseRooms extends React.Component {
    state = {
        roomsList: getBaseRooms(),
    };

    render() {
        const {classes, searchText} = this.props;
        const {roomsList} = this.state;
        const data = filteredData(roomsList, searchText);
        const roomsKeys = Object.keys(data);
        return (
            <React.Fragment>
                {roomsKeys.length > 0 && (
                    <React.Fragment>
                        <Typography variant="h6">{'Non-upgradeable rooms'}</Typography>
                        <Paper className={classes.root} elevation={2}>
                            <List>
                                <ListSubheader disableGutters className={classes.header}>
                                    <IncursionRoomHeader/>
                                </ListSubheader>
                                {roomsKeys.map((roomsKey) => {
                                    const rooms = data[roomsKey];
                                    return (
                                        <React.Fragment key={roomsKey}>
                                            {rooms.map((room) => (
                                                <IncursionRoom key={room.id} roomKey={roomsKey} room={room}/>))}
                                        </React.Fragment>
                                    );
                                })}
                            </List>
                        </Paper>
                    </React.Fragment>
                )}
            </React.Fragment>
        );
    }
}

export default connect(
    state => ({
        searchText: state.incursion.searchText,
    }),
)(withStyles(styles)(IncursionBaseRooms));
