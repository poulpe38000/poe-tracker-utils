import React from 'react'
import {connect} from "react-redux";
import {TextField, withWidth} from '@material-ui/core';
import {compose} from 'redux';
import cloneDeep from 'lodash/cloneDeep';
import {ExportActions, ExportSettings} from 'components/ImportExport/ExportData';
import {isWidthDown} from '@material-ui/core/withWidth';
import {Page} from 'components/pages/layout/Page';
import Box from '@material-ui/core/Box';
import {withSnackbar} from 'notistack';
import {displaySnackbar} from 'utils/snackbar';

class ExportPage extends React.Component {
    state = {
        includeHideouts: true,
        includeInProgressIncursions: true,
        includeCompletedIncursions: true,
    };

    displaySnackbar = displaySnackbar(this.props.enqueueSnackbar);

    handleToggleSettings = (value) => {
        this.setState((prevState) => ({
            ...this.state,
            [value]: !prevState[value]
        }));
    };

    getExportText = () => {
        const {includeHideouts, includeInProgressIncursions, includeCompletedIncursions} = this.state;
        const exportValue = cloneDeep(this.props.exportData);
        !includeHideouts && delete exportValue.hideout;
        !includeInProgressIncursions && delete exportValue.incursion.in_progress;
        !includeCompletedIncursions && delete exportValue.incursion.completed;
        (!includeInProgressIncursions && !includeCompletedIncursions) && delete exportValue.incursion;
        return JSON.stringify(exportValue, null, 2);
    };

    handleCopySuccess = () => {
        this.displaySnackbar('Tracker data copied to clipboard');
    };

    downloadTrackerFile = () => {
        const exportText = this.getExportText();
        const element = document.createElement("a");
        const file = new Blob([exportText], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "default.poetracker";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    };

    render() {
        const {width} = this.props;
        const {includeHideouts, includeInProgressIncursions, includeCompletedIncursions} = this.state;
        const canExportData = includeHideouts || includeInProgressIncursions || includeCompletedIncursions;
        const exportText = this.getExportText();
        return (
            <Page>
                <Box>
                    <TextField
                        fullWidth
                        multiline
                        rows={isWidthDown('xs', width) ? 8 : 16}
                        value={exportText}
                        margin="normal"
                        variant="outlined"
                        InputProps={{readOnly: true}}
                    />
                    <ExportSettings
                        opts={{includeHideouts, includeInProgressIncursions, includeCompletedIncursions}}
                        onClick={this.handleToggleSettings}/>
                </Box>
                <ExportActions
                    exportEnabled={canExportData}
                    exportText={exportText}
                    onDownload={this.downloadTrackerFile}
                    onCopy={this.handleCopySuccess}
                />
            </Page>
        );
    }
}

export default compose(
    connect(
        state => ({
            exportData: {
                hideout: {
                    unlocked: state.hideout.unlocked,
                },
                incursion: {
                    completed: state.incursion.completed,
                    in_progress: state.incursion.in_progress,
                },
            },
        }),
    ),
    withWidth(),
    withSnackbar,
)(ExportPage);
