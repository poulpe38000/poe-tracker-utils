import React from 'react'
import {Button, withStyles} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import {buttonStyles, mergeStyles} from 'utils/themes';
import * as PropTypes from 'prop-types';

const styles = theme => (mergeStyles({
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

class ImportActions extends React.Component {
    static propTypes = {
        importEnabled: PropTypes.bool.isRequired,
        onAttachFile: PropTypes.func.isRequired,
        onImport: PropTypes.func.isRequired,
    };

    render() {
        const {classes, importEnabled, onImport, onAttachFile} = this.props;
        return (
            <Box className={classes.actions}>
                <Button variant="contained" color="primary" className={classes.button}
                        size={'large'}
                        onClick={onAttachFile}>
                    <AttachFileIcon className={classes.leftIcon}/>
                    Load File
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

export default withStyles(styles)(ImportActions);
