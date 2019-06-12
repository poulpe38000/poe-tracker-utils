import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {SnackbarProvider} from 'notistack';
import {ThemeProvider} from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fade from '@material-ui/core/Fade';
import withStyles from '@material-ui/core/styles/withStyles';

import APP_CONSTANTS from 'constants/app.constants';
import {darkTheme, lightTheme} from 'utils/themes';
import {rootActions} from 'store/main/actions';
import {SideMenu} from 'components/layout/SideMenu';
import {TopBar} from 'components/layout/TopBar';
import Routes from 'components/Routes';

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
                <ThemeProvider theme={useLightTheme ? lightTheme : darkTheme}>
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
                </ThemeProvider>
            </BrowserRouter>
        );
    }
}

export default compose(
    connect(
        state => ({
            useLightTheme: state.main.useLightTheme,
        }),
        {
            initializeApp: rootActions.initializeApp,
        },
    ),
    withStyles(styles),
)(App);
