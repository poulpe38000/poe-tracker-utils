import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

import Toolbar from 'components/Incursion/Toolbar/Toolbar';


const styles = ({breakpoints, palette, spacing}) => ({
    root: {
        backgroundColor: palette.background.paper,
        color: palette.text.primary,
        marginBottom: spacing(2),
        top: 64,
        [breakpoints.down('xs')]: {
            top: 56,
        },
    },
});

class IncursionAppBar extends React.Component {
    static propTypes = {
        title: PropTypes.string,
    };

    render() {
        const {classes, title} = this.props;
        return (
            <AppBar className={classes.root} elevation={2} position={'sticky'}>
                <Toolbar title={title}/>
            </AppBar>
        );
    }
}

export default withStyles(styles)(IncursionAppBar);