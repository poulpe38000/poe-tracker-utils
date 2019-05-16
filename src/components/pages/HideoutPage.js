import React from 'react';
import {HideoutTable} from 'components/Hideout';
import {pagesStyles} from 'components/pages/utils';
import {withStyles} from '@material-ui/core';


function HideoutPage() {
    return (
        <React.Fragment>
            <HideoutTable/>
        </React.Fragment>
    );
}

export default withStyles(pagesStyles)(HideoutPage);
