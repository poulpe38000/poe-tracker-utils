import {withStyles} from '@material-ui/core';
import React from 'react';

const styles = theme => ({
    root: {
        padding: theme.spacing.unit * 2,
        paddingTop: theme.spacing.unit * 2,
        flexGrow: 1,
    },
});

function AppPage(props) {
    const {classes} = props;
    return (
        <div className={classes.root}>
            {props.children}
        </div>
    )
}

export default withStyles(styles)(AppPage);