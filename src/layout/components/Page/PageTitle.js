import React from 'react';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

const styles = {
    title: {textAlign: 'center'},
};

class PageTitle extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
    };

    render() {
        const {classes, title} = this.props;
        return (
            <Typography variant="h2" className={classes.title}>
                {title}
            </Typography>
        );
    }
}

export default withStyles(styles)(PageTitle);