import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import List from '@material-ui/core/List';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

import {buttonStyles, mergeStyles} from 'utils/themes';
import SettingsHeader from 'components/pages/ImportExport/Settings/SettingsHeader';

const styles = (theme) => (mergeStyles({
    root: {
        backgroundColor: theme.palette.background.popper,
    },
    details: {
        padding: 0,
    },
    title: {
        fontWeight: theme.typography.fontWeightMedium,
    },
    subtitle: {
        fontStyle: 'italic',
    },
    headerItem: {
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
        '& > *': {
            flex: '1 1 100%',
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: 'flex-start',
        }
    },
    list: {
        width: '100%',
    },
}, buttonStyles(theme)));

class SettingsPanel extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        subtitle: PropTypes.string,
    };

    static defaultProps = {
        title: 'Advanced settings',
        subtitle: null,
    };

    render() {
        const {classes, title, subtitle, children} = this.props;
        return (
            <Box>
                <ExpansionPanel elevation={1} className={classes.root} square>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                        <SettingsHeader title={title} subtitle={subtitle}/>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.details}>
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
            </Box>
        );
    }
}

export default withStyles(styles)(SettingsPanel);
