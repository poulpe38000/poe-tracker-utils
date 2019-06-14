import React from 'react';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

const styles = ({spacing}) => ({
    title: {
        textAlign: 'center',
        fontStyle: 'italic',
        paddingTop: spacing(3),
        paddingBottom: spacing(2),
    }
});

class EmptyResults extends React.Component {
    static propTypes = {
        label: PropTypes.string,
    };

    static defaultProps = {
        label: 'No results found',
    };

    render() {
        const {classes, label} = this.props;
        return (
            <Typography variant="h5" className={classes.title}>{label}</Typography>
        );
    }
}

export default withStyles(styles)(EmptyResults);