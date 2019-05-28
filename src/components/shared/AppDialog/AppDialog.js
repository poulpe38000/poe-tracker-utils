import React from 'react'
import {Dialog, DialogTitle, MuiThemeProvider, withStyles} from '@material-ui/core';
import {dialogTheme} from 'utils/themes';
import * as PropTypes from 'prop-types';

const styles = theme => ({
    title: {
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(2),
        },
    },
});

class AppDialog extends React.Component {
    static propTypes = {
        titleText: PropTypes.string,
    };

    static defaultProps = {
        titleText: null
    };

    render() {
        const {classes, titleText, ...dialogProps} = this.props;
        const {children} = this.props;
        return (
            <MuiThemeProvider theme={dialogTheme}>
                <Dialog {...dialogProps}>
                    {titleText !== null && (
                        <DialogTitle className={classes.title}>{titleText}</DialogTitle>
                    )}
                    {children}
                </Dialog>
            </MuiThemeProvider>
        );
    }
}

export default withStyles(styles)(AppDialog);
