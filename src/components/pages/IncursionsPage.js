import React from "react";
import {Page} from 'components/pages/layout/Page';
import {IncursionList} from 'components/Incursion';

class IncursionsPage extends React.Component {
    render() {
        return (
            <Page>
                <IncursionList/>
            </Page>
        );
    }
}

export default IncursionsPage;