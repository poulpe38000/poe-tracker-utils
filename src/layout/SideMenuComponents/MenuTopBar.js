import React from 'react';
import {compose} from 'redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import withWidth, {isWidthDown} from '@material-ui/core/withWidth';

import APP_CONSTANTS from 'constants/app.constants';

const styles = ({mixins}) => ({
    toolbar: {
        ...mixins.toolbar,
    },
});

class MenuTopBar extends React.Component {
    render() {
        const {classes, width} = this.props;
        const elevation = isWidthDown('xs', width) ? 4 : 0;
        return (
            <AppBar color="primary" position="static" elevation={elevation}>
                <Toolbar color="primary" className={classes.toolbar}>
                    <Typography variant="h6" color="inherit">
                        {APP_CONSTANTS.title}
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

export default compose(
    withStyles(styles),
    withWidth(),
)(MenuTopBar);
