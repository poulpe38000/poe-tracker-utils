import React from "react";
import {Typography, withStyles} from "@material-ui/core";
import {AppPage} from 'components/pages/layout';
import {pagesStyles} from 'utils/themes';
import {SettingsData, SettingsStorage} from 'components/Settings';

function SettingsPage(props) {
    const {classes} = props;
    return (
        <AppPage>
            <Typography variant="h2" className={classes.pageTitle}>
                Settings
            </Typography>
            <SettingsStorage/>
            <SettingsData/>
        </AppPage>
    );
}

export default withStyles(pagesStyles)(SettingsPage);