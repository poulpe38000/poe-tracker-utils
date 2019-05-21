import React from 'react'
import {Dialog, DialogTitle, MuiThemeProvider} from '@material-ui/core';
import {dialogTheme} from 'utils/themes';
import * as PropTypes from 'prop-types';

class AppDialog extends React.Component {
    static propTypes = {
        titleText: PropTypes.string,
    };

    static defaultProps = {
        titleText: null
    };

    render() {
        const {children, titleText} = this.props;
        return (
            <MuiThemeProvider theme={dialogTheme}>
                <Dialog {...this.props}>
                    {titleText !== null && (
                        <DialogTitle>{titleText}</DialogTitle>
                    )}
                    {children}
                </Dialog>
            </MuiThemeProvider>
        );
    }
}

export default AppDialog;
