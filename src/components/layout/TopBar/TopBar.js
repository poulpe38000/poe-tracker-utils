import React from 'react';
import {connect} from 'react-redux';
import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {toggleDrawer} from 'store/main/actions';
import ImportData from 'components/import/ImportData/ImportData';
import ExportData from 'components/export/ExportData/ExportData';
import ResetData from 'components/ResetData/ResetData';

class TopBar extends React.Component {

    handleOpenMenu = () => () => {
        this.props.toggleDrawer(true);
    };

    render() {
        return (
            <React.Fragment>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu" style={{
                            marginLeft: -12,
                            marginRight: 20,
                        }} onClick={this.handleOpenMenu()}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" color="inherit" style={{flexGrow: 1}}>
                            PoE Tracker Helpers
                        </Typography>
                        <ResetData/>
                        <ImportData/>
                        <ExportData/>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        );
    }
}

export default connect(
    state => ({
        showDrawer: state.main.showDrawer
    }),
    dispatch => ({
        toggleDrawer: toggle => dispatch(toggleDrawer(toggle))
    }),
)(TopBar);
