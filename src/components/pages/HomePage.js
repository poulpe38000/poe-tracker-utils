import React from "react";
import {Typography, withStyles} from "@material-ui/core";
import {AppPage} from 'components/pages/layout';
import {pagesStyles} from 'utils/themes';

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