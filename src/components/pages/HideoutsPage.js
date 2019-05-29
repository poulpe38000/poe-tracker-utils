import React from "react";
import {Page} from 'components/pages/layout/Page';
import HideoutList from 'components/Hideout/HideoutList';

class HideoutsPage extends React.Component {
    render() {
        return (
            <Page>
                <HideoutList/>
            </Page>
        );
    }
}

export default HideoutsPage;