import React from "react";
import {Typography, withStyles} from "@material-ui/core";

const styles = theme => ({
    pageTitle: {textAlign: 'center'},
});

function HomePage(props) {
    const {classes} = props;
    return (
        <React.Fragment>
            <Typography variant="h2" className={classes.pageTitle}>
                Welcome to PoE Tracker Helpers
            </Typography>
        </React.Fragment>
    );
}

export default withStyles(styles)(HomePage);