import {createStyles, Theme} from '@material-ui/core';

export const rootStyles = ({spacing}: Theme) => createStyles({
    root: {
        marginTop: spacing(2),
        marginBottom: spacing(2),
    },
});

export const itemStyles = () => createStyles({
    item: {
        '&:hover': {
            backgroundColor: 'inherit',
        }
    },
});