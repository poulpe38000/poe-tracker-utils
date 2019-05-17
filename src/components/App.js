import React from 'react';
import {Route} from 'react-router-dom';
import {withStyles} from '@material-ui/core';
import {SideMenu, TopBar} from 'components/pages/layout';
import {HideoutPage, HomePage, IncursionPage} from 'components/pages';
import {connect} from 'react-redux';
import {initializeApp} from 'store/main/actions';


const styles = theme => ({
    root: {
        padding: theme.spacing.unit * 2,
        paddingTop: 64 + theme.spacing.unit * 2,
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
            <React.Fragment>
                <TopBar/>
                <SideMenu/>
                <div className={classes.root}>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/incursion" component={IncursionPage}/>
                    <Route path="/hideout" component={HideoutPage}/>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(
    null,
    dispatch => ({
        initializeApp: () => (dispatch(initializeApp())),
    }),
)(withStyles(styles)(App));
