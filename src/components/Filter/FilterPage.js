import React from 'react';
import {withSnackbar} from 'notistack';

import {parseFilter} from 'utils/filter/parser';
import {displaySnackbar} from 'utils/snackbar';
import ConditionBlock from 'components/Filter/Display/Block/ConditionBlock';
import FilterImport from 'components/Filter/Import/FilterImport';
import FilterDescription from 'components/Filter/Display/FilterDescription';
import Page from 'layout/Page';

class FilterPage extends React.Component {
    state = {
        filterStruct: {
            description: '',
            blocks: [],
        },
    };

    displaySnackbar = displaySnackbar(this.props.enqueueSnackbar);

    handleContentDataLoad = (text) => {
        try {
            const filterStruct = parseFilter(text);
            this.setState({filterStruct})
        } catch (e) {
            this.displaySnackbar('Unable to parse filter data.');
        }
    };

    render() {
        const {filterStruct} = this.state;
        return (
            <Page title="Filter Reader">
                <FilterImport filterStruct={filterStruct}
                onLoad={this.handleContentDataLoad}/>
                {filterStruct.description && (<FilterDescription description={filterStruct.description}/>)}
                {filterStruct.blocks
                    .map((item, key) => (
                            <ConditionBlock
                                key={key}
                                blockType={item.type}
                                description={item.description}
                                conditions={item.conditions}
                                actions={item.actions}
                            />
                        )
                    )}
            </Page>
        );
    }
}

export default withSnackbar(FilterPage);