import React from 'react';
import {DialogContent, withStyles} from '@material-ui/core';

const styles = theme => ({
    root: {
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing.unit * 2
        },
    }
});

class AppDialogContent extends React.Component {
    render() {
        const {classes, children} = this.props;
        return (
            <DialogContent className={classes.root}>
                {children}
            </DialogContent>
        );
    }
}

export default withStyles(styles)(AppDialogContent);