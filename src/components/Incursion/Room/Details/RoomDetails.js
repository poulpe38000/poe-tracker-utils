import React from 'react';
import Box from '@material-ui/core/Box';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

import RoomLabel from 'components/Incursion/Room/Details/RoomLabel';
import RoomInfo from 'components/Incursion/Room/Details/RoomInfo';

const styles = ({breakpoints}) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',
        [breakpoints.down('sm')]: {
            flexDirection: 'column'
        },
    },
});

class RoomDetails extends React.Component {
    static propTypes = {
        room: PropTypes.object.isRequired,
    };

    render() {
        const {classes, room} = this.props;
        return (
            <Box className={classes.root}>
                <RoomLabel room={room}/>
                <RoomInfo infos={room.notable}/>
                <RoomInfo infos={room.mods}/>
            </Box>
        );
    }
}

export default withStyles(styles)(RoomDetails);
