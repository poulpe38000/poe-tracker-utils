import React from 'react'
import {connect} from "react-redux";
import {Button, Fade, FormHelperText, TextField, withStyles, withWidth} from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {buttonStyles, mergeStyles} from 'utils/themes';
import {compose} from 'redux';
import cloneDeep from 'lodash/cloneDeep';
import {ExportSettings} from 'components/ExportData';
import {isWidthDown} from '@material-ui/core/withWidth';
import {Page} from 'components/pages/layout/Page';

const styles = theme => (mergeStyles({
    inputExportIndicator: {
        color: theme.palette.success.main,
        textAlign: 'center',
    },
    actions: {
        paddingTop: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: 'stretch'
        },
    }
}, buttonStyles(theme)));

class ExportPage extends React.Component {
    state = {
        copySuccess: false,
        includeHideouts: true,
        includeInProgressIncursions: true,
        includeCompletedIncursions: true,
    };
    timer;

    handleToggleSettings = (value) => {
        this.setState({
            ...this.state,
            [value]: !this.state[value]
        });
    };

    getExportText = () => {
        const {includeHideouts, includeInProgressIncursions, includeCompletedIncursions} = this.state;
        const exportValue = cloneDeep(this.props.exportData);
        if (!includeHideouts) {
            delete exportValue.hideout;
        }
        if (!includeInProgressIncursions) {
            delete exportValue.incursion.in_progress;
        }
        if (!includeCompletedIncursions) {
            delete exportValue.incursion.completed;
        }
        if (!includeInProgressIncursions && !includeCompletedIncursions) {
            delete exportValue.incursion;
        }
        return JSON.stringify(exportValue, null, 2);
    };

    handleCopySuccess = () => {
        this.setState({
            copySuccess: true,
        });
        if (!!this.timer) {
            clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
            this.setState({copySuccess: false});
        }, 3000);
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
        const {classes, width} = this.props;
        const {copySuccess, includeHideouts, includeInProgressIncursions, includeCompletedIncursions} = this.state;
        const canExportData = includeHideouts || includeInProgressIncursions || includeCompletedIncursions;
        const exportText = this.getExportText();
        return (
            <Page>
                <div>
                    <TextField
                        fullWidth
                        multiline
                        rows={isWidthDown('xs', width) ? 8 : 16}
                        value={exportText}
                        margin="normal"
                        variant="outlined"
                        InputProps={{readOnly: true}}
                    />
                    <FormHelperText className={classes.inputExportIndicator}>
                        <Fade in={copySuccess}>
                            <span>Tracker data copied to clipboard !</span>
                        </Fade>
                    </FormHelperText>
                    <ExportSettings
                        opts={{includeHideouts, includeInProgressIncursions, includeCompletedIncursions}}
                        onClick={this.handleToggleSettings}/>
                </div>
                <div className={classes.actions}>
                    <Button variant="contained" color="secondary" className={classes.button}
                            onClick={this.downloadTrackerFile} disabled={!canExportData}>
                        <GetAppIcon className={classes.leftIcon}/>
                        Download file
                    </Button>
                    <CopyToClipboard text={exportText} className={classes.button} onCopy={this.handleCopySuccess}>
                        <Button variant="contained" color="secondary" disabled={!canExportData}>
                            <FileCopyOutlinedIcon className={classes.leftIcon}/>
                            Copy data
                        </Button>
                    </CopyToClipboard>
                </div>
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
    withStyles(styles),
    withWidth(),
)(ExportPage);
