import React from 'react'
import {List, withStyles} from '@material-ui/core';
import * as PropTypes from 'prop-types';
import {ImportExportSettingsItem} from 'components/ImportExport';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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

class ImportSettings extends React.Component {
    static propTypes = {
        opts: PropTypes.object.isRequired,
        onClick: PropTypes.func.isRequired
    };

    static defaultProps = {
        opts: {
            ignoreHideouts: false,
            ignoreInProgressIncursions: false,
            ignoreCompletedIncursions: false,
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
                            <ImportExportSettingsItem label="Import Hideouts" value={!opts.ignoreHideouts}
                                                      onClick={this.handleSettingsSwitch('ignoreHideouts')}/>
                            <Divider/>
                            <ImportExportSettingsItem label="Import In-Progress Incursions"
                                                      value={!opts.ignoreInProgressIncursions}
                                                      onClick={this.handleSettingsSwitch('ignoreInProgressIncursions')}/>
                            <Divider/>
                            <ImportExportSettingsItem label="Import Completed Incursions"
                                                      value={!opts.ignoreCompletedIncursions}
                                                      onClick={this.handleSettingsSwitch('ignoreCompletedIncursions')}/>
                        </List>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        );
    }
}

export default withStyles(styles)(ImportSettings);
