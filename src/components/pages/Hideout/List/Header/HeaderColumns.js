import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = ({spacing}) => ({
    root: {
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

class HeaderColumns extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <Box className={classes.root}>
                <Box className={classes.checkbox}>
                    <Typography variant="caption">{'Unlocked'}</Typography>
                </Box>
                <Box className={classes.description}>
                    <Typography variant="caption">{'Hideout information'}</Typography>
                </Box>
            </Box>
        );
    }
}

export default withStyles(styles)(HeaderColumns);