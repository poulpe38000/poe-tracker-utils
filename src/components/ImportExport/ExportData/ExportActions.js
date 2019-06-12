import React from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import GetAppIcon from '@material-ui/icons/GetApp';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

import {buttonStyles, mergeStyles} from 'utils/themes';

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

class ExportActions extends React.Component {
    static propTypes = {
        exportEnabled: PropTypes.bool.isRequired,
        onDownload: PropTypes.func.isRequired,
        onCopy: PropTypes.func.isRequired,
        exportText: PropTypes.string.isRequired,
    };

    render() {
        const {classes, onDownload, onCopy, exportText, exportEnabled} = this.props;
        return (
            <Box className={classes.actions}>
                <CopyToClipboard text={exportText} className={classes.button} onCopy={onCopy}>
                    <Button variant="contained" color="primary" disabled={!exportEnabled}
                            size={'large'}>
                        <FileCopyOutlinedIcon className={classes.leftIcon}/>
                        Copy data
                    </Button>
                </CopyToClipboard>
                <Button variant="contained" color="primary" className={classes.button}
                        size={'large'}
                        onClick={onDownload} disabled={!exportEnabled}>
                    <GetAppIcon className={classes.leftIcon}/>
                    Download file
                </Button>
            </Box>
        );
    }
}

export default withStyles(styles)(ExportActions);
