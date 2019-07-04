import React from 'react';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import ListSubheader from '@material-ui/core/ListSubheader';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = ({spacing}) => ({
    root: {
        lineHeight: 'inherit',
    },
    header: {
        display: 'flex',
        paddingTop: spacing(1),
        paddingBottom: spacing(1),
    },
    checkbox: {
        minWidth: '64px',
        width: '64px',
        textAlign: 'center'
    },
    description: {
        paddingLeft: spacing(1),
        paddingRight: spacing(1),
    }
});

class ListHeader extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <ListSubheader disableGutters className={classes.root}>
                <Paper elevation={0} className={classes.header}>
                    <Box className={classes.checkbox}>
                        <Typography variant="caption">Current</Typography>
                    </Box>
                    <Box className={classes.checkbox}>
                        <Typography variant="caption">Completed</Typography>
                    </Box>
                    <Box className={classes.description}>
                        <Typography variant="caption">Incursion room information</Typography>
                    </Box>
                </Paper>
                <Divider/>
            </ListSubheader>
        );
    }
}

export default withStyles(styles)(ListHeader);
