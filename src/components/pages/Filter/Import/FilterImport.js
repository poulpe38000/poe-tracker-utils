import React, {createRef} from 'react';
import {withSnackbar} from 'notistack';
import * as PropTypes from 'prop-types';

import {displaySnackbar} from 'utils/snackbar';
import FilterActions from 'components/pages/Filter/Import/FilterActions';
import FilterDropZone from 'components/pages/Filter/Import/FilterDropZone';

class FilterImport extends React.Component {
    static propTypes = {
        filterStruct: PropTypes.object.isRequired,
        onLoad: PropTypes.func.isRequired,
    };

    state = {
        filterTextData: '',
    };

    displaySnackbar = displaySnackbar(this.props.enqueueSnackbar);

    changeTextData = (text) => {
        this.setState({
            filterTextData: text,
        });
    };

    onDrop = acceptedFiles => {
        const reader = new FileReader();
        reader.onload = () => {
            try {
                const fileData = reader.result.toString();
                this.changeTextData(fileData);
            } catch (e) {
                this.displaySnackbar('Unable to read filter file.');
            }
        };

        acceptedFiles.forEach(file => reader.readAsText(file, 'utf-8'));
    };

    handleContentDataLoad = () => {
        const {filterTextData} = this.state;
        this.props.onLoad(filterTextData);
    };

    handleContentDataChange = event => this.changeTextData(event.target.value);

    handleContentReset = () => this.changeTextData('');

    render() {
        const {filterTextData} = this.state;
        const dropzoneRef = createRef();
        return (
            <React.Fragment>
                <FilterDropZone dropzoneRef={dropzoneRef}
                                importText={filterTextData}
                                onDrop={this.onDrop}
                                onContentChange={this.handleContentDataChange}/>
                <FilterActions importEnabled={filterTextData.length > 0}
                               onImport={this.handleContentDataLoad}
                               onReset={this.handleContentReset}/>
            </React.Fragment>
        );
    }
}

export default withSnackbar(FilterImport);