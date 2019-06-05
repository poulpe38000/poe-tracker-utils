import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import store from './store/index'
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {CssBaseline} from '@material-ui/core';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {BrowserRouter} from 'react-router-dom';
import APP_CONSTANTS from 'constants/app.constants';
import {mainTheme} from 'utils/themes';
import {SnackbarProvider} from 'notistack';
import Fade from '@material-ui/core/Fade';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename={APP_CONSTANTS.basename}>
            <MuiThemeProvider theme={mainTheme}>
                <CssBaseline/>
                <SnackbarProvider
                    maxSnack={1}
                    hideIconVariant={true}
                    anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                    TransitionComponent={Fade}
                    autoHideDuration={3000}
                    preventDuplicate={true}
                >
                    <App/>
                </SnackbarProvider>
            </MuiThemeProvider>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
