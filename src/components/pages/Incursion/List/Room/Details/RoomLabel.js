import React from 'react';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

const styles = ({breakpoints, spacing}) => ({
    root: {
        flex: '1 1 100%',
        alignSelf: 'center',
        paddingLeft: spacing(1),
        paddingRight: spacing(1),
        [breakpoints.down('sm')]: {
            alignSelf: 'auto',
        },
    },
});

class RoomLabel extends React.Component {
    static propTypes = {
        room: PropTypes.object.isRequired,
    };

    getLabel = (room) => room.tier !== 0 ? `T${room.tier} ${room.name}` : room.name;

    render() {
        const {classes, room} = this.props;
        const label = this.getLabel(room);
        return (
            <Typography variant="subtitle2" className={classes.root}>
                {label}
            </Typography>
        );
    }
}

export default withStyles(styles)(RoomLabel);
