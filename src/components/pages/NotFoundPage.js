import React from "react";
import {Page} from 'components/pages/layout/Page';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import {withStyles} from '@material-ui/core';
import * as PropTypes from 'prop-types';

const styles = theme => ({
    root: {
        marginTop: theme.spacing(5),
        textAlign: 'center',
    }
});

class NotFoundPage extends React.Component {
    static propTypes = {
        to: PropTypes.string
    };

    static defaultProps = {
        to: '/'
    };

    render() {
        const {classes, to} = this.props;
        return (
            <Page title="Page not found">
                <div className={classes.root}>
                    <Button component={Link} to={to}>Back to homepage</Button>
                </div>
            </Page>
        );
    }
}

export default withStyles(styles)(NotFoundPage);