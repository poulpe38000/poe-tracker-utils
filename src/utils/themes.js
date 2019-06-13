import {createMuiTheme} from '@material-ui/core';
import {blueGrey, pink} from '@material-ui/core/colors';

const defaultPalette = {
    primary: {main: blueGrey[600]},
    secondary: {main: pink[300]},
    type: 'dark',
};

export const darkTheme = createMuiTheme({
    palette: {
        ...defaultPalette,
        background: {
            default: '#121212',
            paper: '#242424',
            popper: '#363636',
        }
    },
});

export const lightTheme = createMuiTheme({
    palette: {
        ...defaultPalette,
        type: 'light',
        background: {
            popper: '#fff',
        }
    },
});

export const buttonStyles = (theme) => ({
    button: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        marginLeft: theme.spacing(2),
        '&:first:child': {
            marginLeft: 0,
        },
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0,
        }
    },
    leftIcon: {marginRight: theme.spacing(1)},
    rightIcon: {marginLeft: theme.spacing(1)},
});

export const mergeStyles = (...styles) => {
    return Object.assign({}, ...styles);
};

export const transitionFor = (theme, props, duration = 'enteringScreen') => {
    return theme.transitions.create(props, {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration[duration],
    })
};