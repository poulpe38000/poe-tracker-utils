import React from 'react';
import Box from '@material-ui/core/Box';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
    root: {
        flex: '1 1 auto',
    },
};

class NavSpacer extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <Box className={classes.root}/>
        );
    }
}

export default withStyles(styles)(NavSpacer);
