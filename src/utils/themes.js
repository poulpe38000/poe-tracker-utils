import {createMuiTheme} from '@material-ui/core';
import {amber, blueGrey, green} from '@material-ui/core/colors';


export const mainTheme = createMuiTheme({
    palette: {
        primary: blueGrey,
        secondary: amber,
        success: {main: green['500']},
        type: 'dark', // Switching the dark mode on is a single property value change.
    },
});

export const dialogTheme = createMuiTheme({
    palette: {
        primary: blueGrey,
        secondary: amber,
        success: {main: green['500']},
        type: 'light'
    },
});

export const buttonStyles = (theme) => ({
    button: {margin: theme.spacing(1)},
    leftIcon: {marginRight: theme.spacing(1)},
    rightIcon: {marginLeft: theme.spacing(1)},
});

export const mergeStyles = (...styles) => {
    return Object.assign({}, ...styles);
};

export const transitionFor = (theme, props) => {
    return theme.transitions.create(props, {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    })
};