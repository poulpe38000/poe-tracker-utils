import React from 'react';
import {ListItem, Typography, withStyles} from '@material-ui/core';

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
            <ListItem dense disableGutters className={classes.root}>
                <div className={classes.itemCheckbox}>
                    <Typography variant="caption">Current</Typography>
                </div>
                <div className={classes.itemCheckbox}>
                    <Typography variant="caption">Completed</Typography>
                </div>
                <div/>
            </ListItem>
        );
    }
}

export default withStyles(styles)(IncursionRoomHeader);
