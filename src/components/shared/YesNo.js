import React from 'react';

function YesNo(props) {
    return (
        <React.Fragment>
            {props.value && 'Yes'}
            {!props.value && 'No'}
        </React.Fragment>
    );
}

export default YesNo;