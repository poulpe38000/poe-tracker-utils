import {createMuiTheme, createStyles, Theme} from '@material-ui/core';
import {blueGrey, pink} from '@material-ui/core/colors';

declare module '@material-ui/core/styles/createPalette' {
    // augment background palette with popper background
    interface TypeBackground {
        popper?: string
    }
}

export const darkTheme: Theme = createMuiTheme({
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

export const lightTheme: Theme = createMuiTheme({
    palette: {
        primary: {main: blueGrey[600]},
        secondary: {main: pink[300]},
        type: 'light',
        background: {
            popper: '#fff',
        }
    },
});

export const buttonStyles = ({breakpoints, spacing}: Theme) => createStyles({
    button: {
        marginTop: spacing(1),
        marginBottom: spacing(1),
        marginLeft: spacing(2),
        '&:first:child': {
            marginLeft: 0,
        },
        [breakpoints.down('xs')]: {
            marginLeft: 0,
        }
    },
    leftIcon: {marginRight: spacing(1)},
    rightIcon: {marginLeft: spacing(1)},
});

export const mergeStyles = (...styles: any) => {
    return Object.assign({}, ...styles);
};

export const transitionFor = ({transitions}: Theme, props: string | string[]) => {
    return transitions.create(props, {
        easing: transitions.easing.sharp,
        duration: transitions.duration.leavingScreen,
    })
};