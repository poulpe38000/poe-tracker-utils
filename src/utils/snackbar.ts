export const displaySnackbar: Function = (f: Function): Function => (message: string, options: any = {}): any => {
    f(message, Object.assign({}, options));
};