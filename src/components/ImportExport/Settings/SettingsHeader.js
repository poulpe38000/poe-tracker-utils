import React from 'react'
import TuneIcon from '@material-ui/icons/Tune';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

import {buttonStyles, mergeStyles} from 'utils/themes';

const styles = (theme) => (mergeStyles({
    root: {
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
        '& > *': {
            flex: '1 1 100%',
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: 'flex-start',
        }
    },
    title: {
        fontWeight: theme.typography.fontWeightMedium,
    },
    subtitle: {
        fontStyle: 'italic',
    },
}, buttonStyles(theme)));

class SettingsHeader extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        subtitle: PropTypes.string,
    };

    static defaultProps = {
        title: 'Advanced settings',
        subtitle: null,
    };

    render() {
        const {classes, title, subtitle} = this.props;
        return (
            <React.Fragment>
                <TuneIcon className={classes.leftIcon}/>
                <Box className={classes.root}>
                    <Typography className={classes.title}>{title}</Typography>
                    {subtitle && <Typography className={classes.subtitle} variant={'body2'}>{subtitle}</Typography>}
                </Box>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(SettingsHeader);
