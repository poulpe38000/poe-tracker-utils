import React from 'react';
import {DialogActions, withStyles} from '@material-ui/core';

const styles = theme => ({
    actions: {
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: 'stretch'
        }
    }
});

class AppDialogActions extends React.Component {
    render() {
        const {classes, children} = this.props;
        return (
            <DialogActions className={classes.actions}>
                {children}
            </DialogActions>
        );
    }
}

export default withStyles(styles)(AppDialogActions);