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

export const pagesStyles = {
    pageTitle: {textAlign: 'center'},
};

export const buttonStyles = (theme) => ({
    button: {margin: theme.spacing.unit},
    leftIcon: {marginRight: theme.spacing.unit},
    rightIcon: {marginLeft: theme.spacing.unit},
});

export const mergeStyles = (...styles) => {
    return Object.assign({}, ...styles);
};
