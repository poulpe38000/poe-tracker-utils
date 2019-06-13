import React from 'react';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import ListSubheader from '@material-ui/core/ListSubheader';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = ({breakpoints, spacing}) => ({
    header: {
        lineHeight: 'inherit',
        top: 64 + 64,
        [breakpoints.down('xs')]: {
            top: 56 + 56,
        }
    },
    root: {
        display: 'flex',
        paddingTop: spacing(1),
        paddingBottom: spacing(1),
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
                    <Box className={classes.itemCheckbox}>
                        <Typography variant="caption">Current</Typography>
                    </Box>
                    <Box className={classes.itemCheckbox}>
                        <Typography variant="caption">Completed</Typography>
                    </Box>
                    <Box/>
                </Paper>
                <Divider/>
            </ListSubheader>
        );
    }
}

export default withStyles(styles)(IncursionListHeader);
