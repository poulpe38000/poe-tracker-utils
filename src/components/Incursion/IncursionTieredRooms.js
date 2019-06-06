import React from 'react';
import INCURSION_CONSTANTS from 'constants/incursion.constants';
import {IncursionTieredRoom} from 'components/Incursion';
import {Divider, List, Paper, Typography, withStyles} from '@material-ui/core';
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


class IncursionTieredRooms extends React.Component {
    render() {
        const {classes, searchText} = this.props;
        const data = filteredData(INCURSION_CONSTANTS.rooms.upgradeable, searchText);
        const roomsKeys = Object.keys(data);
        return (
            <React.Fragment>
                <Typography variant="h6">Upgradeable rooms</Typography>
                <Paper className={classes.root} elevation={2}>
                    <List>
                        {
                            roomsKeys.map((roomsKey, idx) => (
                                    <React.Fragment key={roomsKey}>
                                        <IncursionTieredRoom roomKey={roomsKey}
                                                             rooms={INCURSION_CONSTANTS.rooms.upgradeable[roomsKey]}/>
                                        {idx < roomsKeys.length - 1 && <Divider/>}
                                    </React.Fragment>
                                )
                            )
                        }
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
)(withStyles(styles)(IncursionTieredRooms));
