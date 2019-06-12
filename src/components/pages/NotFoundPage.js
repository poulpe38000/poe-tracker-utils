import React from "react";
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import withStyles from '@material-ui/core/styles/withStyles';

import APP_CONSTANTS from 'constants/app.constants';
import {Page} from 'components/layout/Page';

const styles = ({spacing}) => ({
    root: {
        marginTop: spacing(5),
        textAlign: 'center',
    }
});

function NotFoundPage({classes}) {
    return (
        <Container>
            <Page title="Page not found">
                <div className={classes.root}>
                    <Button variant={'outlined'} component={Link} to={APP_CONSTANTS.routes.root} size={'large'}>
                        {'Back to homepage'}
                    </Button>
                </div>
            </Page>
        </Container>
    );
}

export default withStyles(styles)(NotFoundPage);