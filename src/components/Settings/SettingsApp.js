import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import StorageIcon from '@material-ui/icons/Storage';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import {rootActions} from 'store/root/actions';
import {clearStorage, getLocalStorageSettings, toggleLocalStorageSettings} from 'utils/storage';
import {rootStyles} from 'components/Settings/shared';
import SettingsAppItem from 'components/Settings/SettingsAppItem';

class SettingsApp extends React.Component {
    state = {
        allowStorage: getLocalStorageSettings()
    };

    componentWillUnmount() {
        if (!this.state.allowStorage) {
            clearStorage();
        } else {
            this.props.setAll();
        }
    }

    handleToggleTheme = () => {
        this.props.toggleTheme();
    };

    handleToggleStorage = () => {
        this.setState({
            allowStorage: toggleLocalStorageSettings()
        });
    };

    render() {
        const {classes, useLightTheme} = this.props;
        const {allowStorage} = this.state;
        return (
            <React.Fragment>
                <Typography variant="h6">{'Application Settings'}</Typography>
                <Paper className={classes.root} elevation={2}>
                    <List disablePadding>
                        <SettingsAppItem primaryText={'Use light theme'}
                                         icon={InvertColorsIcon}
                                         value={useLightTheme}
                                         onClick={this.handleToggleTheme}/>
                        <SettingsAppItem primaryText={'Allow local storage'}
                                         icon={StorageIcon}
                                         value={allowStorage}
                                         onClick={this.handleToggleStorage}
                                         noDivider/>
                    </List>
                </Paper>
            </React.Fragment>
        );
    }
}

export default compose(
    connect(
        state => ({
            useLightTheme: state.useLightTheme,
        }),
        {
            toggleTheme: rootActions.toggleTheme,
            setAll: rootActions.setAll,
        },
    ),
    withStyles(rootStyles),
)(SettingsApp);