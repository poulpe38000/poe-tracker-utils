import React from 'react'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

import {buttonStyles, mergeStyles} from 'utils/themes';
import ImageAvatar from 'components/shared/Avatar/ImageAvatar';
import incursionLogo from 'components/layout/components/SideMenu/incursion_logo.png';

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

class RankHeader extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        stats: PropTypes.object.isRequired,
    };

    static defaultProps = {
        title: 'Advanced settings',
    };

    getSubtitle() {
        const {stats} = this.props;
        return `Current Rank: ${stats.current_rank}, Next Rank: ${stats.future_rank}`;
    }

    render() {
        const {classes, title} = this.props;
        const subtitle = this.getSubtitle();
        return (
            <React.Fragment>
                <Box className={classes.leftIcon}>
                    <ImageAvatar label={'Incursion rooms'} value={incursionLogo} className={classes.icon}/>
                </Box>
                <Box className={classes.root}>
                    <Typography className={classes.title}>{title}</Typography>
                    {subtitle && <Typography className={classes.subtitle} variant={'body2'}>{subtitle}</Typography>}
                </Box>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(RankHeader);
