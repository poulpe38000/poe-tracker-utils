import React from 'react';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

import {itemStyles} from 'components/pages/Settings/constants';

class SettingsDataItem extends React.Component {
    static propTypes = {
        primaryText: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        secondaryText: PropTypes.string,
        noDivider: PropTypes.bool
    };

    static defaultProps = {
        secondaryText: '',
        noDivider: false
    };

    render() {
        const {classes, primaryText, secondaryText, onClick, noDivider} = this.props;
        return (
            <React.Fragment>
                <ListItem button disableRipple className={classes.item} onClick={onClick}>
                    <ListItemIcon>
                        <SettingsBackupRestoreIcon/>
                    </ListItemIcon>
                    <ListItemText primary={primaryText}
                                  secondary={secondaryText}
                    />
                </ListItem>
                {!noDivider && <Divider/>}
            </React.Fragment>
        );
    }
}

export default withStyles(itemStyles)(SettingsDataItem);