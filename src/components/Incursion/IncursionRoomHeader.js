import React from 'react';
import {ListItem, Typography, withStyles} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

const styles = {
    root: {
        display: 'flex',
        paddingBottom: 0,
    },
    itemCheckbox: {
        width: '64px',
        textAlign: 'center'
    },
};

class IncursionRoomHeader extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <Paper elevation={0}>
            <ListItem dense disableGutters className={classes.root}>
                <div className={classes.itemCheckbox}>
                    <Typography variant="caption">Current</Typography>
                </div>
                <div className={classes.itemCheckbox}>
                    <Typography variant="caption">Completed</Typography>
                </div>
                <div/>
            </ListItem>
            </Paper>
        );
    }
}

export default withStyles(styles)(IncursionRoomHeader);
