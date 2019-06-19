import React, {createRef} from 'react';

import FilterDropZone from 'components/Filter/FilterDropZone';
import {parseFilter} from 'utils/filter/parser';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {displaySnackbar} from 'utils/snackbar';
import {withSnackbar} from 'notistack';
import ConditionBlock from 'components/Filter/Block/ConditionBlock';

class FilterContainer extends React.Component {
    state = {
        filterTextData: '',
        filterStruct: {
            description: '',
            blocks: [],
        },
    };

    displaySnackbar = displaySnackbar(this.props.enqueueSnackbar);

    changeTextData = (text) => {
        this.setState({
            filterTextData: text,
        });
    };

    changeStruct = (struct) => {
        this.setState({
            filterStruct: struct,
        });
    };

    onDrop = acceptedFiles => {
        const reader = new FileReader();
        reader.onload = () => {
            try {
                const fileData = reader.result.toString();
                this.changeTextData(fileData);
                const fileStruct = parseFilter(fileData);
                this.changeStruct(fileStruct);
            } catch (e) {
                this.displaySnackbar('Unable to read tracker file.');
            }
        };

        acceptedFiles.forEach(file => reader.readAsText(file, 'utf-8'));
    };

    handleContentDataChange = () => {
    };

    render() {
        const {filterTextData, filterStruct} = this.state;
        const dropzoneRef = createRef();
        return (
            <React.Fragment>
                <FilterDropZone dropzoneRef={dropzoneRef}
                                importText={filterTextData}
                                onDrop={this.onDrop}
                                onContentChange={this.handleContentDataChange}/>
                {filterStruct.description && (
                    <Paper>
                        <Typography variant={'body1'}>
                            <pre>{filterStruct.description}</pre>
                        </Typography>
                    </Paper>
                )}
                {filterStruct.blocks
                    .map((item) => (
                            <ConditionBlock
                                blockType={item.type}
                                description={item.description}
                                conditions={item.conditions}
                                actions={item.actions}
                            />
                        )
                    )}
            </React.Fragment>
        );
    }
}

export default withSnackbar(FilterContainer);