import React from 'react';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

const styles = ({typography}) => ({
    label: {
        fontStyle: 'italic',
    },
    value: {
        fontStyle: 'normal',
        fontWeight: typography.fontWeightMedium,
    },
});

class RankLine extends React.Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
    };

    render() {
        const {classes, label, value} = this.props;
        return (
            <React.Fragment>
                <Typography className={classes.label}>
                    {label}
                    <Typography component={'span'} className={classes.value}>{value}</Typography>
                </Typography>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(RankLine);
