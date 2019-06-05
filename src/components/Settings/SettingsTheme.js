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
import InvertColorsIcon from '@material-ui/icons/InvertColors';
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
        const {classes, useLightTheme} = this.props;
        return (
            <React.Fragment>
                <Paper className={classes.root}>
                    <Typography variant="h4">Theme Settings</Typography>
                    <List className={classes.list}>
                        <ListItem>
                            <ListItemIcon>
                                <InvertColorsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Use Light Theme" />
                            <ListItemSecondaryAction>
                                <Switch
                                    onChange={this.handleToggleTheme}
                                    checked={useLightTheme}
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
    }),
)(withStyles(styles)(SettingsTheme));