import React from 'react';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

const styles = ({breakpoints, spacing}) => ({
    root: {
        flex: '1 1 100%',
        alignSelf: 'center',
        paddingLeft: spacing(1),
        paddingRight: spacing(1),
        [breakpoints.down('xs')]: {
            alignSelf: 'flex-start'
        }
    },
});

class HideoutLabel extends React.Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
    };

    render() {
        const {classes, label} = this.props;
        return (
            <Typography variant="subtitle2" className={classes.root}>
                {label}
            </Typography>
        );
    }
}

export default withStyles(styles)(HideoutLabel);