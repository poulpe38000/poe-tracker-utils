import React from 'react';
import {IconButton, ListItemIcon, ListItemText, Menu, MenuItem} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import SettingsIcon from '@material-ui/icons/Settings';
import {connect} from 'react-redux';
import {toggleExportDialog, toggleImportDialog} from 'store/import-export/actions';
import {toggleSettingsDialog} from 'store/main/actions';

class TopBarActionsXs extends React.Component {
    state = {
        anchorEl: null,
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    handleToggleImportDialog = () => {
        this.props.toggleImportDialog(true);
        this.handleClose();
    };

    handleToggleExportDialog = () => {
        this.props.toggleExportDialog(true);
        this.handleClose();
    };

    handleToggleSettingsDialog = () => {
        this.props.toggleSettingsDialog(true);
        this.handleClose();
    };

    render() {
        const {anchorEl} = this.state;
        const open = Boolean(anchorEl);
        console.log(anchorEl);
        return (
            <React.Fragment>
                <IconButton
                    aria-owns={open ? 'menu-appbar' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                >
                    <MoreVertIcon/>
                </IconButton>

                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleToggleImportDialog}>
                        <ListItemIcon>
                            <CloudUploadIcon/>
                        </ListItemIcon>
                        <ListItemText>Import</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={this.handleToggleExportDialog}>
                        <ListItemIcon>
                            <CloudDownloadIcon/>
                        </ListItemIcon>
                        <ListItemText>Export</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={this.handleToggleSettingsDialog}>
                        <ListItemIcon>
                            <SettingsIcon/>
                        </ListItemIcon>
                        <ListItemText>Settings</ListItemText>
                    </MenuItem>
                </Menu>
            </React.Fragment>
        );
    }
}

export default connect(
    null,
    dispatch => ({
        toggleImportDialog: (payload) => (dispatch(toggleImportDialog(payload))),
        toggleExportDialog: (payload) => (dispatch(toggleExportDialog(payload))),
        toggleSettingsDialog: (payload) => (dispatch(toggleSettingsDialog(payload))),
    }),
)(TopBarActionsXs);