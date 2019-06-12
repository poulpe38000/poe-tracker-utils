import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import clsx from 'clsx';
import withStyles from '@material-ui/core/styles/withStyles';

import APP_CONSTANTS from 'constants/app.constants';
import {transitionFor} from 'utils/themes';

const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    drawerOpen: {
        [theme.breakpoints.up('sm')]: {
            paddingLeft: APP_CONSTANTS.drawerWidth,
        },
        transition: transitionFor(theme, 'padding-left'),
    },
    drawerClose: {
        [theme.breakpoints.up('sm')]: {
            paddingLeft: theme.spacing(8) + 1,
        },
        transition: transitionFor(theme, 'padding-left'),
    },
});

function ContentWrapper({classes, sidenavExpanded, children}) {
    return (
        <div className={clsx(classes.root, {
            [classes.drawerOpen]: sidenavExpanded,
            [classes.drawerClose]: !sidenavExpanded,
        })}>
            {children}
        </div>
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