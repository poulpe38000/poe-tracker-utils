import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

import APP_CONSTANTS from 'constants/app.constants';
import {transitionFor} from 'utils/themes';

const drawerWidth = APP_CONSTANTS.drawerWidth;

const styles = (theme) => ({
    root: {
        zIndex: theme.zIndex.appBar - 1,
        top: 64,
        left: 0,
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
        transition: transitionFor(theme, ['left', 'width']),
    },
    drawerClose: {
        [theme.breakpoints.up('sm')]: {
            left: theme.spacing(8) + 1,
            width: `calc(100% - ${theme.spacing(8) + 1}px)`,
        },
        transition: transitionFor(theme, ['left', 'width'], 'leavingScreen'),
    },
    indicator: {
        backgroundColor: theme.palette.primary.contrastText,
    }
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
            <AppBar position="fixed" className={clsx(classes.root, {
                [classes.drawerOpen]: sidenavExpanded,
                [classes.drawerClose]: !sidenavExpanded,
            })}>
                <Tabs value={value} variant="fullWidth" onChange={onChange} classes={{
                    indicator: classes.indicator
                }}>
                    {tabs.map((tab, key) => (
                        <Tab key={key} label={tab.label}/>
                    ))}
                </Tabs>
            </AppBar>
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
)(ImportExportTabs);
