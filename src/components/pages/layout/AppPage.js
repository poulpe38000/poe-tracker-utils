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
    const {classes, children} = props;
    return (
        <div className={classes.root}>
            {children}
        </div>
    )
}

export default withStyles(styles)(AppPage);