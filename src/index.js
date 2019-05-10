import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import store from './store/index'
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {CssBaseline} from '@material-ui/core';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

import {indigo, pink} from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: pink,
        type: 'dark', // Switching the dark mode on is a single property value change.
    },
    typography: {
        useNextVariants: true,
    }
});

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
