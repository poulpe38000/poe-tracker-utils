import React from 'react';
import {Typography, withStyles} from '@material-ui/core';
import {pagesStyles} from 'components/pages/utils';
import {IncursionTable} from 'components/Incursion';

function IncursionPage(props) {
    const {classes} = props;
    return (
        <React.Fragment>
            <Typography variant="h3" className={classes.pageTitle}>Incursion room completion tracker</Typography>
            <IncursionTable/>
        </React.Fragment>
    );
}

export default withStyles(pagesStyles)(IncursionPage);
