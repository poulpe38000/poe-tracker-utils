import React from 'react'
import {Dialog, DialogTitle, MuiThemeProvider, withStyles} from '@material-ui/core';
import {dialogTheme} from 'utils/themes';
import * as PropTypes from 'prop-types';

const styles = theme => ({
    dialogTitle: {
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing.unit * 2
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
        const {classes, children, titleText} = this.props;
        return (
            <MuiThemeProvider theme={dialogTheme}>
                <Dialog {...this.props}>
                    {titleText !== null && (
                        <DialogTitle className={classes.dialogTitle}>{titleText}</DialogTitle>
                    )}
                    {children}
                </Dialog>
            </MuiThemeProvider>
        );
    }
}

export default withStyles(styles)(AppDialog);
