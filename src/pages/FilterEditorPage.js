import React from "react";
import {Link} from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import Page from 'layout/Page';
import ROUTES from 'constants/routes.constants';
import FilterContainer from 'components/Filter/FilterContainer';

const styles = ({spacing}) => ({
    root: {
        marginTop: spacing(5),
        textAlign: 'center',
    }
});

function FilterEditorPage({classes}) {
    return (
        <Page title="Filter Editor">
            {/*<FilterContainer/>*/}
            <Box className={classes.root}>
                <Typography variant={'h6'}>{'This section is under construction.'}</Typography>
                <Box className={classes.root}/>
                <Button variant="contained" color="primary" component={Link} to={ROUTES.root} size={'large'}>
                    {'Back to homepage'}
                </Button>
            </Box>
        </Page>
    );
}

export default withStyles(styles)(FilterEditorPage);