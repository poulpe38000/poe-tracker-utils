import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

const styles = ({breakpoints, spacing}) => ({
    root: {
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

class IncursionRoomDetails extends React.Component {
    static propTypes = {
        room: PropTypes.object.isRequired,
    };

    render() {
        const {classes, room} = this.props;
        const roomLabel = room.tier !== 0 ? `T${room.tier} ${room.name}` : room.name;
        return (
            <Box className={classes.root}>
                <Typography variant="subtitle2" className={classes.itemText}>
                    {roomLabel}
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
        );
    }
}

export default withStyles(styles)(IncursionRoomDetails);
