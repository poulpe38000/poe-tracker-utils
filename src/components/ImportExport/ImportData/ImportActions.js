import React from 'react'
import {Button, withStyles, withWidth} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import {isWidthDown} from '@material-ui/core/withWidth';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import {buttonStyles, mergeStyles} from 'utils/themes';
import {compose} from 'redux';
import * as PropTypes from 'prop-types';

const styles = theme => (mergeStyles({
    actions: {
        paddingTop: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center',
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
        const {classes, width, importEnabled, onImport, onAttachFile} = this.props;
        return (
            <Box className={classes.actions}>
                <Button variant="contained" color="secondary" className={classes.button}
                        size={isWidthDown('xs', width) ? 'medium' : 'large'}
                        onClick={onAttachFile}>
                    <AttachFileIcon className={classes.leftIcon}/>
                    Load File
                </Button>
                <Button variant="contained" color="secondary" className={classes.button}
                        size={isWidthDown('xs', width) ? 'medium' : 'large'}
                        onClick={onImport} disabled={!importEnabled}>
                    <CloudUploadIcon className={classes.leftIcon}/>
                    Import data
                </Button>
            </Box>
        );
    }
}

export default compose(
    withStyles(styles),
    withWidth()
)(ImportActions);
