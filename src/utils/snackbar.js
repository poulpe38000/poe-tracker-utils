import React from 'react';
import Button from '@material-ui/core/Button';

export const snackbarAction = (props) => (key) => (
    <Button color="secondary" size="small" onClick={() => { props.closeSnackbar(key) }}>
        Dismiss
    </Button>
);