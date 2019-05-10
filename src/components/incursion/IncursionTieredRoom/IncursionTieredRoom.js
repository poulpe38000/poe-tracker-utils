import React from 'react';
import PropTypes from 'prop-types';
import {Paper, withStyles} from '@material-ui/core';
import IncursionRoom from 'components/incursion/IncursionRoom/IncursionRoom';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
    },
});

class IncursionTieredRoom extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <Paper className={classes.root}>
                    {this.props.rooms.map((room) => (<IncursionRoom key={room.id} room={room}/>))}
                </Paper>
            </div>
        );
    }
}

IncursionTieredRoom.propTypes = {
    rooms: PropTypes.array.isRequired,
};

export default withStyles(styles)(IncursionTieredRoom);
