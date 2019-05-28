import {createMuiTheme} from '@material-ui/core';
import {amber, blueGrey, green} from '@material-ui/core/colors';


export const mainTheme = createMuiTheme({
    palette: {
        primary: blueGrey,
        secondary: amber,
        success: {main: green['500']},
        type: 'dark', // Switching the dark mode on is a single property value change.
    },
    typography: {
        useNextVariants: true,
    }
});

export const dialogTheme = createMuiTheme({
    palette: {
        primary: blueGrey,
        secondary: amber,
        success: {main: green['500']},
        type: 'light'
    },
    typography: {
        useNextVariants: true,
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
