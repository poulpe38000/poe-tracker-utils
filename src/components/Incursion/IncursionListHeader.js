import React from 'react';
import {Typography, withStyles} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import ListSubheader from '@material-ui/core/ListSubheader';

const styles = theme => ({
    header: {
        lineHeight: 'inherit',
        top: 64,
        [theme.breakpoints.down('xs')]: {
            top: 56,
        }
    },
    root: {
        display: 'flex',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    itemCheckbox: {
        width: '64px',
        textAlign: 'center'
    },
});

class IncursionListHeader extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <ListSubheader disableGutters className={classes.header}>
                <Paper elevation={0} className={classes.root}>
                    <div className={classes.itemCheckbox}>
                        <Typography variant="caption">Current</Typography>
                    </div>
                    <div className={classes.itemCheckbox}>
                        <Typography variant="caption">Completed</Typography>
                    </div>
                    <div/>
                </Paper>
                <Divider/>
            </ListSubheader>
        );
    }
}

export default withStyles(styles)(IncursionListHeader);
