import React from "react";
import {Link} from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import Page from 'layout/Page';
import ROUTES from 'constants/routes.constants';

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
                <Box className={classes.root}>
                    <Typography variant={'h6'}>{'This section is under construction.'}</Typography>
                    <Box className={classes.root}/>
                    <Button variant="contained" color="primary" component={Link} to={ROUTES.root} size={'large'}>
                        {'Back to homepage'}
                    </Button>
                </Box>
            </Page>
        </Container>
    );
}

export default withStyles(styles)(FilterEditorPage);