import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import withStyles from '@material-ui/core/styles/withStyles';

import CONSTANTS from 'data/constants';
import {transitionFor} from 'utils/themes';

const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    drawerOpen: {
        [theme.breakpoints.up('sm')]: {
            paddingLeft: CONSTANTS.drawerWidth,
        },
        transition: transitionFor(theme, 'padding-left'),
    },
    drawerClose: {
        [theme.breakpoints.up('sm')]: {
            paddingLeft: theme.spacing(8) + 1,
        },
        transition: transitionFor(theme, 'padding-left', 'leavingScreen'),
    },
});

function ContentWrapper({classes, sidenavExpanded, children}) {
    return (
        <Box className={clsx(classes.root, {
            [classes.drawerOpen]: sidenavExpanded,
            [classes.drawerClose]: !sidenavExpanded,
        })}>
            {children}
        </Box>
    );
}

export default compose(
    connect(
        state => ({
            sidenavExpanded: state.sidenavExpanded,
        }),
    ),
    withStyles(styles),
)(ContentWrapper);