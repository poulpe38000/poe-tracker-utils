import React from 'react';
import {Link} from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';

import Page from 'components/layout/Page';
import ROUTES from 'data/routes.constants';

const styles = ({spacing}) => ({
    root: {
        marginTop: spacing(5),
        textAlign: 'center',
    }
});

function NotFoundPage({classes}) {
    return (
        <Page title="Page not found">
            <Box className={classes.root}>
                <Button variant="contained" color="primary" component={Link} to={ROUTES.root} size={'large'}>
                    {'Back to homepage'}
                </Button>
            </Box>
        </Page>
    );
}

export default withStyles(styles)(NotFoundPage);