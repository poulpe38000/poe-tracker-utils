import React from 'react';
import {ImportData} from 'components/ImportData';
import {ExportData} from 'components/ExportData';
import {Settings} from 'components/Settings';
import {IconButton, withStyles} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
    actionButton: {
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    actionPanel: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    }
});

class TopBarActions extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <IconButton
                    className={classes.actionButton}
                    aria-haspopup="true"
                >
                    <MoreVertIcon/>
                </IconButton>
                <div className={classes.actionPanel}>
                    <ImportData/>
                    <ExportData/>
                    <Settings/>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(TopBarActions);