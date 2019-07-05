import React from 'react'
import {compose} from 'redux';
import {connect} from 'react-redux';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import {buttonStyles, mergeStyles} from 'utils/themes';
import ImageAvatar from 'components/shared/Avatar/ImageAvatar';
import incursionLogo from 'components/layout/components/SideMenu/incursion_logo.png';
import {getIncursionRankStats} from 'components/pages/Incursion/shared/functions';

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

    getSubtitle() {
        const {inProgressRooms, completedRooms} = this.props;
        const stats = getIncursionRankStats(inProgressRooms, completedRooms);
        return `Current Rank: ${stats.current_rank}, Next Rank: ${stats.future_rank}`;
    }

    render() {
        const {classes} = this.props;
        const subtitle = this.getSubtitle();
        return (
            <React.Fragment>
                <Box className={classes.leftIcon}>
                    <ImageAvatar label={'Incursion rooms'} value={incursionLogo} className={classes.icon}/>
                </Box>
                <Box className={classes.root}>
                    <Typography className={classes.title}>{'Alva Rank'}</Typography>
                    {subtitle && <Typography className={classes.subtitle} variant={'body2'}>{subtitle}</Typography>}
                </Box>
            </React.Fragment>
        );
    }
}

export default compose(
    connect(
        state => ({
            inProgressRooms: state.incursion.in_progress,
            completedRooms: state.incursion.completed,
        })
    ),
    withStyles(styles),
)(RankHeader);
