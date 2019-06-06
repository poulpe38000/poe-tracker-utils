import React from 'react';
import {connect} from 'react-redux';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';
import {SnackbarProvider} from 'notistack';
import Fade from '@material-ui/core/Fade';
import {BrowserRouter} from 'react-router-dom';

import APP_CONSTANTS from 'constants/app.constants';
import {darkTheme, lightTheme} from 'utils/themes';
import {initializeApp} from 'store/main/actions';
import {SideMenu} from 'components/pages/layout/SideMenu';
import {TopBar} from 'components/pages/layout/TopBar';
import Routes from 'components/Routes';
import withStyles from '@material-ui/core/styles/withStyles';
import {compose} from 'redux';

const styles = {
    variantDefault: {minWidth: 'auto'}
};

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        const {classes, useLightTheme} = this.props;
        return (
            <BrowserRouter basename={APP_CONSTANTS.basename}>
                <MuiThemeProvider theme={useLightTheme ? lightTheme : darkTheme}>
                    <CssBaseline/>
                    <SnackbarProvider
                        maxSnack={1}
                        classes={classes}
                        hideIconVariant={true}
                        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                        TransitionComponent={Fade}
                        autoHideDuration={4000}
                        preventDuplicate={true}
                    >
                        <TopBar/>
                        <SideMenu/>
                        <Routes/>
                    </SnackbarProvider>
                </MuiThemeProvider>
            </BrowserRouter>
        );
    }
}

export default compose(
    connect(
        state => ({
            useLightTheme: state.main.useLightTheme,
        }),
        dispatch => ({
            initializeApp: () => (dispatch(initializeApp())),
        }),
    ),
    withStyles(styles),
)(App);
