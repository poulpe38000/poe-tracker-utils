import React from "react";
import {Link} from 'react-router-dom';
import {Button, Container, createStyles, Theme, withStyles} from '@material-ui/core';

import APP_CONSTANTS from 'constants/app.constants';
import {Page} from 'components/layout/Page';

interface Props {
    classes: any;
}

const styles = ({spacing}: Theme) => createStyles({
    root: {
        marginTop: spacing(5),
        textAlign: 'center',
    }
});

class NotFoundPage extends React.Component<Props> {
    render() {
        const {classes} = this.props;
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
}

export default withStyles(styles)(NotFoundPage);