import React from 'react'
import {List, withStyles} from '@material-ui/core';
import * as PropTypes from 'prop-types';
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

class ImportExportSettingsPanel extends React.Component {
    static propTypes = {
        title: PropTypes.string,
    };

    static defaultProps = {
        title: 'Advanced settings',
    };

    render() {
        const {classes, title, children} = this.props;
        return (
            <div>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                        <Typography className={classes.header}>{title}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.root}>
                        <List disablePadding className={classes.list}>
                            {children.map(child => (
                                <React.Fragment>
                                    <Divider/>
                                    {child}
                                </React.Fragment>
                            ))}
                        </List>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        );
    }
}

export default withStyles(styles)(ImportExportSettingsPanel);
