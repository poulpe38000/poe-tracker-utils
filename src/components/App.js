import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {withStyles} from '@material-ui/core';
import {HideoutsPage, HomePage, IncursionsPage, NotFoundPage, SettingsPage} from 'components/pages';
import {connect} from 'react-redux';
import {initializeApp} from 'store/main/actions';
import {compose} from 'redux';
import {SideMenu} from 'components/pages/layout/SideMenu';
import {TopBar} from 'components/pages/layout/TopBar';
import {Dialogs} from 'components/pages/layout/Dialogs';
import APP_CONSTANTS from 'constants/app.constants';


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
                    <Switch>
                        <Route path={APP_CONSTANTS.routes.root} exact component={HomePage}/>
                        <Route path={APP_CONSTANTS.routes.hideouts.root} component={HideoutsPage}/>
                        <Route path={APP_CONSTANTS.routes.incursions.root} component={IncursionsPage}/>
                        <Route path={APP_CONSTANTS.routes.settings.root} component={SettingsPage}/>
                        <Route component={NotFoundPage}/>
                    </Switch>
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
