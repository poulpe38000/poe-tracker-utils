import {createMuiTheme} from '@material-ui/core';
import {blueGrey, pink} from '@material-ui/core/colors';


export const darkTheme = createMuiTheme({
    palette: {
        primary: blueGrey,
        secondary: {main: pink[300]},
        type: 'dark',
    },
});

export const lightTheme = createMuiTheme({
    palette: {
        primary: blueGrey,
        secondary: {main: pink[300]},
        type: 'light',
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

export const transitionFor = (theme, props) => {
    return theme.transitions.create(props, {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    })
};