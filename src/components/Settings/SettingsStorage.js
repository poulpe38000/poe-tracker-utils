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
import StorageIcon from '@material-ui/icons/Storage';
import {connect} from 'react-redux';
import {setAll} from 'store/main/actions';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
    },
    list: {
        width: '100%',
        maxWidth: 360,
    },
});

class SettingsStorage extends React.Component {
    state = {
        allowStorage: false
    };

    componentWillMount() {
        this.setState({
            allowStorage: getLocalStorageSettings()
        });
    };

    componentWillUnmount() {
        if (!this.state.allowStorage) {
            clearStorage();
        } else {
            this.props.setAll();
        }
    }

    handleAllowStorage = () => {
        this.setState({
            allowStorage: toggleLocalStorageSettings()
        });
    };

    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <Paper className={classes.root}>
                    <Typography variant="h4">Storage Settings</Typography>
                    <List className={classes.list}>
                        <ListItem>
                            <ListItemIcon>
                                <StorageIcon />
                            </ListItemIcon>
                            <ListItemText primary="Allow local storage" />
                            <ListItemSecondaryAction>
                                <Switch
                                    onChange={this.handleAllowStorage}
                                    checked={this.state.allowStorage}
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
    null,
    dispatch => ({
        setAll: () => (dispatch(setAll())),
    }),
)(withStyles(styles)(SettingsStorage));