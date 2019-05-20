import React from 'react'
import {createMuiTheme, Dialog, MuiThemeProvider} from '@material-ui/core';
import {amber, blueGrey} from '@material-ui/core/colors';

const dialogTheme = createMuiTheme({
    palette: {
        primary: blueGrey,
        secondary: amber,
        type: 'light'
    },
    typography: {
        useNextVariants: true,
    },
});

class AppDialog extends React.Component {

    render() {
        const {children} = this.props;
        return (
            <MuiThemeProvider theme={dialogTheme}>
                <Dialog {...this.props}>
                    {children}
                </Dialog>
            </MuiThemeProvider>
        );
    }
}

export default AppDialog;
