import React from 'react';
import {Route} from 'react-router-dom';
import {withStyles} from '@material-ui/core';
import {HomePage, SettingsPage, TrackersPage} from 'components/pages';
import {connect} from 'react-redux';
import {initializeApp} from 'store/main/actions';
import {compose} from 'redux';
import {SideMenu} from 'components/pages/layout/SideMenu';
import {TopBar} from 'components/pages/layout/TopBar';
import {Dialogs} from 'components/pages/layout/Dialogs';


const styles = theme => ({
    root: {
        paddingTop: 64,
        flexGrow: 1,
        [theme.breakpoints.down('xs')]: {
            paddingTop: 56,
        }
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
                <Dialogs/>
                <div className={classes.root}>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/trackers" component={TrackersPage}/>
                    <Route path="/settings" component={SettingsPage}/>
                </div>
            </React.Fragment>
        );
    }
}

export default compose(
    connect(
        null,
        dispatch => ({
            initializeApp: () => (dispatch(initializeApp())),
        }),
    ),
    withStyles(styles)
)(App);
