import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {SnackbarProvider} from 'notistack';
import {ThemeProvider} from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fade from '@material-ui/core/Fade';
import withStyles from '@material-ui/core/styles/withStyles';

import CONSTANTS from 'constants';
import {darkTheme, lightTheme} from 'utils/themes';
import {rootActions} from 'store/root/actions';
import SideMenu from 'components/layout/SideMenu';
import TopBar from 'components/layout/TopBar';
import Routes from 'components/layout/Routes';

const styles = {
    base: {minWidth: 'auto'}
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.scrollableRef = React.createRef();
    }

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        const {classes, useLightTheme} = this.props;
        return (
            <BrowserRouter basename={CONSTANTS.basename}>
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
                        <TopBar scrollTarget={this.scrollableRef}/>
                        <SideMenu/>
                        <Routes scrollableRef={this.scrollableRef}/>
                    </SnackbarProvider>
                </ThemeProvider>
            </BrowserRouter>
        );
    }
}

export default compose(
    connect(
        state => ({
            useLightTheme: state.useLightTheme,
        }),
        {
            initializeApp: rootActions.initializeApp,
        },
    ),
    withStyles(styles),
)(App);
