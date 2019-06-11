import React from 'react';
import {Divider, ListItem, ListItemIcon, ListItemText, withStyles} from '@material-ui/core';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import {itemStyles} from './shared';

interface Props {
    classes: any,
    primaryText: string,
    secondaryText?: string,
    onClick(event: React.MouseEvent<HTMLElement>): void,
    noDivider?: boolean
}


class SettingsDataItem extends React.Component<Props> {
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