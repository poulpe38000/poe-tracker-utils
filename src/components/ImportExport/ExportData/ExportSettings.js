import React from 'react'
import {List, withStyles} from '@material-ui/core';
import * as PropTypes from 'prop-types';
import {ImportExportSettingsItem} from 'components/ImportExport';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    root: {
        padding: 0,
    },
    header: {
        fontWeight: theme.typography.fontWeightMedium,
    },
    list: {
        width: '100%',
    },
});

class ExportSettings extends React.Component {
    static propTypes = {
        opts: PropTypes.object.isRequired,
        onClick: PropTypes.func.isRequired
    };

    static defaultProps = {
        opts: {
            includeHideouts: true,
            includeInProgressIncursions: true,
            includeCompletedIncursions: true,
        },
    };

    handleSettingsSwitch = (value) => () => {
        this.props.onClick(value);
    };

    render() {
        const {classes, opts} = this.props;
        return (
            <div>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                        <Typography className={classes.header}>Advanced settings</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.root}>
                        <List disablePadding className={classes.list}>
                            <Divider/>
                            <ImportExportSettingsItem label="Export Hideouts" value={opts.includeHideouts}
                                                      onClick={this.handleSettingsSwitch('includeHideouts')}/>
                            <Divider/>
                            <ImportExportSettingsItem label="Export In-Progress Incursions"
                                                      value={opts.includeInProgressIncursions}
                                                      onClick={this.handleSettingsSwitch('includeInProgressIncursions')}/>
                            <Divider/>
                            <ImportExportSettingsItem label="Export Completed Incursions"
                                                      value={opts.includeCompletedIncursions}
                                                      onClick={this.handleSettingsSwitch('includeCompletedIncursions')}/>
                        </List>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        );
    }
}

export default withStyles(styles)(ExportSettings);
