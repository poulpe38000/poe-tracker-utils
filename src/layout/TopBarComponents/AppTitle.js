import React from 'react';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

import APP_CONSTANTS from 'constants/app.constants';

const styles = {
    root: {
        flex: '1 1 auto',
        overflow: 'hidden',
        width: 0,
        whiteSpace: 'nowrap',
    },
};

class AppTitle extends React.Component {
    static propTypes = {
        title: PropTypes.string,
    };
    static defaultProps = {
        title: APP_CONSTANTS.title,
    };

    render() {
        const {classes, title} = this.props;
        return (
            <Typography variant="h6" color="inherit" className={classes.root}>
                {title}
            </Typography>
        );
    }
}

export default withStyles(styles)(AppTitle);
