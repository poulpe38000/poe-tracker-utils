import React, {createRef} from 'react'
import {connect} from "react-redux";
import {importData} from 'store/main/actions';
import {sanitizeTrackerData} from 'utils/sanitizer';
import {ImportActions, ImportDropZone, ImportSettings} from 'components/ImportExport/ImportData';
import {Page} from 'components/pages/layout/Page';
import Box from '@material-ui/core/Box';
import {compose} from 'redux';
import {withSnackbar} from 'notistack';
import {displaySnackbar} from 'utils/snackbar';

class ImportPage extends React.Component {
    state = {
        importTextData: '',
        ignoreHideouts: false,
        ignoreInProgressIncursions: false,
        ignoreCompletedIncursions: false,
    };

    displaySnackbar = displaySnackbar(this.props.enqueueSnackbar);

    changeImportText = (text) => {
        this.setState({
            importTextData: text,
        });
    };

    handleToggleSettings = (value) => {
        this.setState((prevState) => ({
            ...this.state,
            [value]: !prevState[value]
        }));
    };

    onDrop = acceptedFiles => {
        const reader = new FileReader();
        reader.onload = () => {
            try {
                const fileData = sanitizeTrackerData(JSON.parse(reader.result.toString()));
                this.changeImportText(JSON.stringify(fileData, null, 2));
            } catch (e) {
                this.displaySnackbar('Unable to read tracker file.');
            }
        };

        acceptedFiles.forEach(file => reader.readAsBinaryString(file));
    };

    handleContentDataChange = event => this.changeImportText(event.target.value);

    handleDropZoneOpen = (dropzoneRef) => () => dropzoneRef.current.open();

    handleContentDataLoad = () => {
        const {importTextData, ignoreHideouts, ignoreInProgressIncursions, ignoreCompletedIncursions} = this.state;
        try {
            this.props
                .importData({
                    data: JSON.parse(importTextData),
                    opts: {
                        ignoreHideouts,
                        ignoreInProgressIncursions,
                        ignoreCompletedIncursions,
                    }
                });
            this.displaySnackbar('Tracker data successfully imported');
        } catch (e) {
            this.displaySnackbar('Your tracker data is invalid.');
        }
    };

    render() {
        const {importTextData, ignoreHideouts, ignoreInProgressIncursions, ignoreCompletedIncursions} = this.state;
        const canImportData = !(ignoreHideouts && ignoreInProgressIncursions && ignoreCompletedIncursions) && importTextData.length > 0;
        const dropzoneRef = createRef();
        return (
            <Page>
                <Box>
                    <ImportDropZone
                        dropzoneRef={dropzoneRef}
                        importText={importTextData}
                        onDrop={this.onDrop}
                        onContentChange={this.handleContentDataChange}
                    />
                    <ImportSettings
                        opts={{ignoreHideouts, ignoreInProgressIncursions, ignoreCompletedIncursions}}
                        onClick={this.handleToggleSettings}/>
                </Box>
                <ImportActions
                    importEnabled={canImportData}
                    onImport={this.handleContentDataLoad}
                    onAttachFile={this.handleDropZoneOpen(dropzoneRef)}
                />
            </Page>
        );
    }
}

export default compose(
    connect(
        null,
        dispatch => ({
            importData: (payload) => dispatch(importData(payload)),
        }),
    ),
    withSnackbar,
)(ImportPage);
