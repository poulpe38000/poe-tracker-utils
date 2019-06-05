import React from 'react';
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
import {toggleTheme} from 'store/main/actions';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    list: {
        width: '100%',
        maxWidth: 360,
    },
});

class SettingsTheme extends React.Component {

    handleToggleTheme = () => {
        this.props.toggleTheme();
    };

    render() {
        const {classes, useDarkTheme} = this.props;
        return (
            <React.Fragment>
                <Paper className={classes.root}>
                    <Typography variant="h4">Theme Settings</Typography>
                    <List className={classes.list}>
                        <ListItem>
                            <ListItemIcon>
                                <StorageIcon />
                            </ListItemIcon>
                            <ListItemText primary="Use Dark Theme" />
                            <ListItemSecondaryAction>
                                <Switch
                                    onChange={this.handleToggleTheme}
                                    checked={useDarkTheme}
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
        useDarkTheme: state.main.darkTheme,
    }),
    dispatch => ({
        toggleTheme: () => (dispatch(toggleTheme())),
    }),
)(withStyles(styles)(SettingsTheme));