import React from 'react';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';

export const styles = ({spacing}) => ({
    root: {
        marginTop: spacing(2),
        marginBottom: spacing(2),
    },
});

class SettingsList extends React.Component {

    render() {
        const {classes, children} = this.props;
        return (
            <Paper className={classes.root} elevation={2}>
                <List disablePadding>
                    {children}
                </List>
            </Paper>
        );
    }
}

export default withStyles(styles)(SettingsList);