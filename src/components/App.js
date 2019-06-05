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


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        const {useDarkTheme} = this.props;
        return (
            <BrowserRouter basename={APP_CONSTANTS.basename}>
                <MuiThemeProvider theme={useDarkTheme ? darkTheme : lightTheme}>
                    <CssBaseline/>
                    <SnackbarProvider
                        maxSnack={1}
                        hideIconVariant={true}
                        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                        TransitionComponent={Fade}
                        autoHideDuration={3000}
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

export default connect(
    state => ({
        useDarkTheme: state.main.darkTheme,
    }),
    dispatch => ({
        initializeApp: () => (dispatch(initializeApp())),
    }),
)(App);
