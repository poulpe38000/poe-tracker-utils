export const rootStyles = ({spacing}) => ({
    root: {
        marginTop: spacing(2),
        marginBottom: spacing(2),
    },
});

export const itemStyles = () => ({
    item: {
        '&:hover': {
            backgroundColor: 'inherit',
        }
    },
});