import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {withStyles} from '@material-ui/core';
import {SideMenu, TopBar} from 'components/layout';
import HomePage from 'components/home/HomePage/HomePage';
import IncursionPage from 'components/incursion/IncursionPage/IncursionPage';
import HideoutPage from 'components/hideout/HideoutPage/HideoutPage';
import {connect} from 'react-redux';
import {initializeApp} from 'store/actions';


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
            <Router>
                <TopBar/>
                <SideMenu/>
                <div className={classes.root}>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/incursion" component={IncursionPage}/>
                    <Route path="/hideout" component={HideoutPage}/>
                </div>
            </Router>
        );
    }
}

export default connect(
    null,
    dispatch => ({
        initializeApp: () => (dispatch(initializeApp())),
    }),
)(withStyles(styles)(App));
