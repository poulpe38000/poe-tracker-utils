import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TuneIcon from '@material-ui/icons/Tune';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

import {buttonStyles, mergeStyles} from 'utils/themes';

const styles = (theme) => (mergeStyles({
    root: {
        padding: 0,
    },
    header: {
        fontWeight: theme.typography.fontWeightMedium,
    },
    list: {
        width: '100%',
    },
}, buttonStyles(theme)));

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
                <ExpansionPanel elevation={2}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                        <TuneIcon className={classes.leftIcon}/>
                        <Typography className={classes.header}>{title}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.root}>
                        <List disablePadding className={classes.list}>
                            {children.map((child, key) => (
                                <React.Fragment key={key}>
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
