export const displaySnackbar = (f) => (message, options = {}) => {
    f(message, Object.assign({}, options));
};
