import React from 'react';
import {clearStorage, getLocalStorageSettings, toggleLocalStorageSettings} from 'utils/storage';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Paper,
    Switch,
    Typography,
    withStyles
} from '@material-ui/core';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import StorageIcon from '@material-ui/icons/Storage';
import {connect} from 'react-redux';
import {setAll, toggleTheme} from 'store/main/actions';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    root: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    listItem: {
        '&:hover': {
            backgroundColor: 'inherit',
        }
    },
});

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
                <Typography variant="h6">Application Settings</Typography>
                <Paper className={classes.root} elevation={2}>
                    <List disablePadding>
                        <ListItem button disableRipple className={classes.listItem} onClick={this.handleToggleTheme}>
                            <ListItemIcon>
                                <InvertColorsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Use light theme" />
                            <ListItemSecondaryAction>
                                <Switch
                                    onChange={this.handleToggleTheme}
                                    checked={useLightTheme}
                                />
                            </ListItemSecondaryAction>
                        </ListItem>
                        <Divider/>
                        <ListItem button disableRipple className={classes.listItem} onClick={this.handleToggleStorage}>
                            <ListItemIcon>
                                <StorageIcon />
                            </ListItemIcon>
                            <ListItemText primary="Allow local storage" />
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

export default connect(
    state => ({
        useLightTheme: state.main.useLightTheme,
    }),
    dispatch => ({
        toggleTheme: () => (dispatch(toggleTheme())),
        setAll: () => (dispatch(setAll())),
    }),
)(withStyles(styles)(SettingsApp));