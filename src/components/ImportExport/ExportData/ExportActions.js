import React from 'react'
import {Button, withStyles, withWidth} from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {buttonStyles, mergeStyles} from 'utils/themes';
import {compose} from 'redux';
import {isWidthDown} from '@material-ui/core/withWidth';
import Box from '@material-ui/core/Box';
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

class ExportActions extends React.Component {
    static propTypes = {
        exportEnabled: PropTypes.bool.isRequired,
        onDownload: PropTypes.func.isRequired,
        onCopy: PropTypes.func.isRequired,
        exportText: PropTypes.string.isRequired,
    };

    render() {
        const {classes, width, onDownload, onCopy, exportText, exportEnabled} = this.props;
        return (
            <Box className={classes.actions}>
                <Button variant="contained" color="primary" className={classes.button}
                        size={isWidthDown('xs', width) ? 'medium' : 'large'}
                        onClick={onDownload} disabled={!exportEnabled}>
                    <GetAppIcon className={classes.leftIcon}/>
                    Download file
                </Button>
                <CopyToClipboard text={exportText} className={classes.button} onCopy={onCopy}>
                    <Button variant="contained" color="primary" disabled={!exportEnabled}
                            size={isWidthDown('xs', width) ? 'medium' : 'large'}>
                        <FileCopyOutlinedIcon className={classes.leftIcon}/>
                        Copy data
                    </Button>
                </CopyToClipboard>
            </Box>
        );
    }
}

export default compose(
    withStyles(styles),
    withWidth(),
)(ExportActions);
