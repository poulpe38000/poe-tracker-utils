import React from "react";
import {Page} from 'components/pages/layout/Page';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import {withStyles} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import APP_CONSTANTS from 'constants/app.constants';

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