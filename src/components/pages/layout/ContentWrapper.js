import React from 'react';
import {withStyles} from '@material-ui/core';
import {compose} from 'redux';
import {connect} from 'react-redux';
import clsx from 'clsx';

import APP_CONSTANTS from 'constants/app.constants';
import {transitionFor} from 'utils/themes';

const drawerWidth = APP_CONSTANTS.drawerWidth;

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    drawerOpen: {
        [theme.breakpoints.up('sm')]: {
            paddingLeft: drawerWidth,
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

class ContentWrapper extends React.Component {

    render() {
        const {classes, sidenavExpanded, children} = this.props;
        return (
            <div className={clsx(classes.root, {
                [classes.drawerOpen]: sidenavExpanded,
                [classes.drawerClose]: !sidenavExpanded,
            })}>
                {children}
            </div>
        );
    }
}

export default compose(
    connect(
        state => ({
            sidenavExpanded: state.sidenavExpanded,
        }),
    ),
    withStyles(styles),
)(ContentWrapper);