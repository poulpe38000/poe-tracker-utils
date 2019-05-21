import React from 'react'
import {Dialog, MuiThemeProvider} from '@material-ui/core';
import {dialogTheme} from 'components/shared/themes';

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
