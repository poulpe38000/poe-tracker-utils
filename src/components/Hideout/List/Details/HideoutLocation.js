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

class HideoutLocation extends React.Component {
    static propTypes = {
        location: PropTypes.array.isRequired,
    };

    render() {
        const {classes, location} = this.props;
        const hideoutLocation = location.join(', ');
        return (
            <Typography variant="caption" className={classes.root}>
                {!!hideoutLocation && <em>{'Location: '}{hideoutLocation}</em>}
            </Typography>
        );
    }
}

export default withStyles(styles)(HideoutLocation);