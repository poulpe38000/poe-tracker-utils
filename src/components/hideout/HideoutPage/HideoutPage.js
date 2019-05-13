import React from 'react';
import {Typography} from '@material-ui/core';
import {connect} from 'react-redux';
import HideoutTable from 'components/hideout/HideoutTable/HideoutTable';


function HideoutPage(props) {
    return (
        <React.Fragment>
            <Typography variant="h3" style={{textAlign: 'center'}}>Hideouts unlock tracker</Typography>
            <HideoutTable/>
        </React.Fragment>
    );
}

export default connect(
    state => ({
        unlocked: state.hideout.unlocked,
    }),
)(HideoutPage);
