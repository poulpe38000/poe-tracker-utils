import React from 'react';
import {connect} from 'react-redux';
import HideoutTable from 'components/hideout/HideoutTable/HideoutTable';


function HideoutPage() {
    return (
        <React.Fragment>
            <HideoutTable/>
        </React.Fragment>
    );
}

export default connect(
    state => ({
        unlocked: state.hideout.unlocked,
    }),
)(HideoutPage);
