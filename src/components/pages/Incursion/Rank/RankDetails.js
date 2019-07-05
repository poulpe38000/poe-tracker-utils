import React from 'react'
import RankCompletion from 'components/pages/Incursion/Rank/Details/RankCompletion';
import RankAdvancement from 'components/pages/Incursion/Rank/Details/RankAdvancement';

class RankDetails extends React.Component {

    render() {
        return (
            <React.Fragment>
                <RankCompletion/>
                <RankAdvancement/>
            </React.Fragment>
        );
    }
}

export default RankDetails;
