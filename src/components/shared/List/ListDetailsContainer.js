import React from 'react';
import Box from '@material-ui/core/Box';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = ({breakpoints}) => ({
    root: {display: 'flex',},
    container: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',
        [breakpoints.down('xs')]: {
            flexDirection: 'column'
        }
    },
});

class ListDetailsContainer extends React.Component {
    render() {
        const {classes, children} = this.props;
        return (
            <Box className={classes.container}>
                {children}
            </Box>
        );
    }
}

export default withStyles(styles)(ListDetailsContainer);