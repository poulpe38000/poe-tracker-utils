import React from 'react';
import Button from '@material-ui/core/Button';

export const displaySnackbar = (f) => (message, options = {}) => {
    f(message, Object.assign({}, options));
};

export const snackbarAction = (props) => (key) => (
    <Button color="secondary" size="small" onClick={() => { props.closeSnackbar(key) }}>
        Close
    </Button>
);