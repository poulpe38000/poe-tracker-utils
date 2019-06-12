import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import StorageIcon from '@material-ui/icons/Storage';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import {rootActions} from 'store/root/actions';
import {clearStorage, getLocalStorageSettings, toggleLocalStorageSettings} from 'utils/storage';
import {mergeStyles} from 'utils/themes';
import {itemStyles, rootStyles} from 'components/Settings/shared';

const styles = (theme) => (mergeStyles(rootStyles(theme), itemStyles(theme)));

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
                        <ListItem button disableRipple className={classes.item} onClick={this.handleToggleTheme}>
                            <ListItemIcon>
                                <InvertColorsIcon/>
                            </ListItemIcon>
                            <ListItemText primary={'Use light theme'}/>
                            <ListItemSecondaryAction>
                                <Switch
                                    onChange={this.handleToggleTheme}
                                    checked={useLightTheme}
                                />
                            </ListItemSecondaryAction>
                        </ListItem>
                        <Divider/>
                        <ListItem button disableRipple className={classes.item} onClick={this.handleToggleStorage}>
                            <ListItemIcon>
                                <StorageIcon/>
                            </ListItemIcon>
                            <ListItemText primary={'Allow local storage'}/>
                            <ListItemSecondaryAction>
                                <Switch
                                    onChange={this.handleToggleStorage}
                                    checked={allowStorage}
                                />
                            </ListItemSecondaryAction>
                        </ListItem>
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
    withStyles(styles),
)(SettingsApp);