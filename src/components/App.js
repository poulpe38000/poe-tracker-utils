import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {withStyles} from '@material-ui/core';
import {SideMenu, TopBar} from 'components/pages/layout';
import {HideoutPage, HomePage, IncursionPage} from 'components/pages';
import {connect} from 'react-redux';
import {initializeApp} from 'store/main/actions';
import APP_CONSTANTS from 'constants/app';


const styles = theme => ({
    root: {
        padding: theme.spacing.unit * 2,
        flexGrow: 1
    },
});

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        const {classes} = this.props;
        return (
            <BrowserRouter basename={APP_CONSTANTS.basename}>
                <TopBar/>
                <SideMenu/>
                <div className={classes.root}>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/incursion" component={IncursionPage}/>
                    <Route path="/hideout" component={HideoutPage}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default connect(
    null,
    dispatch => ({
        initializeApp: () => (dispatch(initializeApp())),
    }),
)(withStyles(styles)(App));
