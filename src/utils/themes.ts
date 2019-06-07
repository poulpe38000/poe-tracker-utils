import {createMuiTheme} from '@material-ui/core';
import {blueGrey, pink} from '@material-ui/core/colors';

declare module '@material-ui/core/styles/createPalette' {
    // augment background palette with popper background
    interface TypeBackground {
        popper?: string
    }
}

export const darkTheme = createMuiTheme({
    palette: {
        primary: {main: blueGrey[600]},
        secondary: {main: pink[300]},
        type: 'dark',
        background: {
            default: '#121212',
            paper: '#242424',
            popper: '#363636',
        }
    },
});

export const lightTheme = createMuiTheme({
    palette: {
        primary: {main: blueGrey[600]},
        secondary: {main: pink[300]},
        type: 'light',
        background: {
            popper: '#fff',
        }
    },
});

export const buttonStyles = (theme: any) => ({
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

export const mergeStyles = (...styles: any) => {
    return Object.assign({}, ...styles);
};

export const transitionFor = (theme: any, props: string | string[]) => {
    return theme.transitions.create(props, {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    })
};