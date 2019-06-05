import {createMuiTheme} from '@material-ui/core';
import {blueGrey, indigo, pink} from '@material-ui/core/colors';


export const darkTheme = createMuiTheme({
    palette: {
        primary: blueGrey,
        secondary: pink,
        type: 'dark', // Switching the dark mode on is a single property value change.
    },
});

export const lightTheme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: pink,
        type: 'light',
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