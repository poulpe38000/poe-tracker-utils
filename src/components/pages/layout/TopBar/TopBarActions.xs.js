import React from 'react';
import {IconButton, ListItemIcon, ListItemText, Menu, MenuItem} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import GetAppIcon from '@material-ui/icons/GetApp';
import {connect} from 'react-redux';
import {toggleExportDialog, toggleImportDialog} from 'store/main/actions';

class TopBarActionsXs extends React.Component {
    state = {
        anchorEl: null,
    };

    handleOpenMenu = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleCloseMenu = () => {
        this.setState({anchorEl: null});
    };

    handleToggleImportDialog = () => {
        this.props.toggleImportDialog(true);
        this.handleCloseMenu();
    };

    handleToggleExportDialog = () => {
        this.props.toggleExportDialog(true);
        this.handleCloseMenu();
    };

    render() {
        const {anchorEl} = this.state;
        const open = Boolean(anchorEl);
        return (
            <React.Fragment>
                <IconButton
                    aria-owns={open ? 'menu-appbar' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleOpenMenu}
                >
                    <MoreVertIcon/>
                </IconButton>

                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                    transformOrigin={{vertical: 'top', horizontal: 'right'}}
                    open={open}
                    onClose={this.handleCloseMenu}
                >
                    <MenuItem onClick={this.handleToggleImportDialog}>
                        <ListItemIcon>
                            <CloudUploadIcon/>
                        </ListItemIcon>
                        <ListItemText>Import</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={this.handleToggleExportDialog}>
                        <ListItemIcon>
                            <GetAppIcon/>
                        </ListItemIcon>
                        <ListItemText>Export</ListItemText>
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
    }),
)(TopBarActionsXs);