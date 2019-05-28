import {Typography, withStyles} from '@material-ui/core';
import React from 'react';
import * as PropTypes from 'prop-types';

const styles = {
    pageTitle: {textAlign: 'center'},
};

class PageTitle extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
    };

    render() {
        const {classes, title} = this.props;
        return (
            <Typography variant="h2" className={classes.pageTitle}>
                {title}
            </Typography>
        );
    }
}

export default withStyles(styles)(PageTitle);