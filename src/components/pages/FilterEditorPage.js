import React from "react";
import {Page} from 'components/pages/layout/Page';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import {withStyles} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import APP_CONSTANTS from 'constants/app.constants';
import Typography from '@material-ui/core/Typography';

const styles = ({spacing}) => ({
    root: {
        marginTop: spacing(5),
        textAlign: 'center',
    }
});

function FilterEditorPage({classes}) {
    return (
        <Container>
            <Page title="Filter Editor">
                <div className={classes.root}>
                    <Typography variant={'h6'}>{'This section is under construction.'}</Typography>
                    <div className={classes.root}>
                    </div>
                    <Button variant={'outlined'} component={Link} to={APP_CONSTANTS.routes.root} size={'large'}>
                        {'Back to homepage'}
                    </Button>
                </div>
            </Page>
        </Container>
    );
}

export default withStyles(styles)(FilterEditorPage);