import React from 'react';
import {withStyles} from '@material-ui/core';
import {PageTitle} from 'components/pages/layout/Page';
import * as PropTypes from 'prop-types';
import {compose} from 'redux';
import {connect} from 'react-redux';
import clsx from 'clsx';
import APP_CONSTANTS from 'constants/app.constants';

const drawerWidth = APP_CONSTANTS.drawerWidth;

const styles = theme => ({
    loader: {
        marginBottom: '-4px',
    },
    root: {
        flexGrow: 1,
    },
    pageContainer: {
        padding: theme.spacing(2),
        paddingTop: theme.spacing(2),
        flexGrow: 1,
    },
    drawerOpen: {
        [theme.breakpoints.up('sm')]: {
            paddingLeft: drawerWidth,
        },
        transition: theme.transitions.create('padding-left', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        [theme.breakpoints.up('sm')]: {
            paddingLeft: theme.spacing(8) + 1,
        },
        transition: theme.transitions.create('padding-left', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
});

class Page extends React.Component {
    static propTypes = {
        title: PropTypes.string,
    };
    static defaultProps = {
        title: '',
    };

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const {classes, title, sidenavExpanded, children} = this.props;
        return (
            <React.Fragment>
                <div className={clsx(classes.root, {
                    [classes.drawerOpen]: sidenavExpanded,
                    [classes.drawerClose]: !sidenavExpanded,
                })}>
                    <div className={classes.pageContainer}>
                        {!!title && <PageTitle title={title}/>}
                        {children}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default compose(
    connect(
        state => ({
            sidenavExpanded: state.main.sidenavExpanded,
        }),
    ),
    withStyles(styles),
)(Page);