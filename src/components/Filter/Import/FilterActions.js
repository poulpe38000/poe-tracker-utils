import React from 'react'
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

import {buttonStyles, mergeStyles} from 'utils/themes';

const styles = (theme) => (mergeStyles({
    actions: {
        paddingTop: theme.spacing(2),
        display: 'flex',
        justifyContent: 'flex-end',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: 'stretch'
        },
    }
}, buttonStyles(theme)));

class FilterActions extends React.Component {
    static propTypes = {
        importEnabled: PropTypes.bool.isRequired,
        onReset: PropTypes.func.isRequired,
        onImport: PropTypes.func.isRequired,
    };

    render() {
        const {classes, importEnabled, onImport, onReset} = this.props;
        return (
            <Box className={classes.actions}>
                <Button variant="outlined" className={classes.button}
                        size={'large'}
                        onClick={onReset}>
                    <SettingsBackupRestoreIcon className={classes.leftIcon}/>
                    Reset
                </Button>
                <Button variant="contained" color="primary" className={classes.button}
                        size={'large'}
                        onClick={onImport} disabled={!importEnabled}>
                    <CloudUploadIcon className={classes.leftIcon}/>
                    Import data
                </Button>
            </Box>
        );
    }
}

export default withStyles(styles)(FilterActions);
