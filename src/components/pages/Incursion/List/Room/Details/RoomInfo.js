import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

const styles = ({breakpoints, spacing}) => ({
    root: {
        flex: '1 1 100%',
        alignSelf: 'center',
        paddingLeft: spacing(1),
        paddingRight: spacing(1),
        [breakpoints.down('sm')]: {
            alignSelf: 'auto',
        },
    },
    detail: {
        [breakpoints.down('sm')]: {
            position: 'relative',
            marginLeft: spacing(1),
            '&::before': {
                content: '"-"',
                position: 'absolute',
                left: spacing(-1),
            }
        },
    },
});

class RoomInfo extends React.Component {
    static propTypes = {
        infos: PropTypes.array,
    };
    static defaultProps = {
        infos: [],
    };

    render() {
        const {classes, infos} = this.props;
        return (
            <Typography variant="caption" className={classes.root}>
                {infos.map((item, key) => (<Box key={key} className={classes.detail}>{item}</Box>))}
            </Typography>
        );
    }
}

export default withStyles(styles)(RoomInfo);
