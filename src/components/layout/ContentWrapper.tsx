import React from 'react';
import {createStyles, Theme, withStyles} from '@material-ui/core';
import {connect} from 'react-redux';
import clsx from 'clsx';

import APP_CONSTANTS from 'constants/app.constants';
import {transitionFor} from 'utils/themes';
import {IAppState} from 'store/state';

interface Props {
    classes: any,
    sidenavExpanded: boolean
}

const styles = (theme: Theme) => createStyles({
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

class ContentWrapper extends React.Component<Props> {

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

export default connect(
        (state: IAppState) => ({
            sidenavExpanded: state.sidenavExpanded,
        }),
    )(withStyles(styles)(ContentWrapper));