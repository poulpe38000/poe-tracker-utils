import React from 'react';
import {AppBar, Tab, Tabs, withStyles} from '@material-ui/core';
import {compose} from 'redux';
import {connect} from 'react-redux';
import APP_CONSTANTS from 'constants/app.constants';
import clsx from 'clsx';
import {transitionFor} from 'utils/themes';
import PropTypes from 'prop-types';

const drawerWidth = APP_CONSTANTS.drawerWidth;

const styles = theme => ({
    root: {
        zIndex: theme.zIndex.appBar -1,
        top: 64,
        right: 'inherit',
        [theme.breakpoints.down('xs')]: {
            top: 56,
        }
    },
    drawerOpen: {
        [theme.breakpoints.up('sm')]: {
            left: drawerWidth,
            width: `calc(100% - ${APP_CONSTANTS.drawerWidth}px)`,
        },
        transition: transitionFor(theme,['left', 'width']),
    },
    drawerClose: {
        [theme.breakpoints.up('sm')]: {
            left: theme.spacing(8) + 1,
            width: `calc(100% - ${theme.spacing(8) + 1}px)`,
        },
        transition: transitionFor(theme,['left', 'width']),
    },
});

class ImportExportTabs extends React.Component {
    static propTypes = {
        tabs: PropTypes.array.isRequired,
        value: PropTypes.number.isRequired,
        onChange: PropTypes.func.isRequired,
    };

    render() {
        const {onChange, value, classes, tabs, sidenavExpanded} = this.props;
        return (
            <React.Fragment>
                <AppBar position="fixed" className={clsx(classes.root, {
                    [classes.drawerOpen]: sidenavExpanded,
                    [classes.drawerClose]: !sidenavExpanded,
                })}>
                    <Tabs value={value} variant="fullWidth" onChange={onChange}>
                        {tabs.map((tab, key) => (
                            <Tab key={key} label={tab.label}/>
                        ))}
                    </Tabs>
                </AppBar>
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
)(ImportExportTabs);
