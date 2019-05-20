import React from "react";
import {Typography, withStyles} from "@material-ui/core";
import {pagesStyles} from 'components/pages/utils';
import {AppPage} from 'components/pages/layout';

function HomePage(props) {
    const {classes} = props;
    return (
        <AppPage>
            <Typography variant="h2" className={classes.pageTitle}>
                Welcome to PoE Tracker Helpers
            </Typography>
        </AppPage>
    );
}

export default withStyles(pagesStyles)(HomePage);