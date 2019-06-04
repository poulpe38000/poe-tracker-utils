import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {withStyles} from '@material-ui/core';
import {HideoutsPage, HomePage, ImportExportPage, IncursionsPage, NotFoundPage, SettingsPage} from 'components/pages';
import {connect} from 'react-redux';
import {initializeApp} from 'store/main/actions';
import {compose} from 'redux';
import {SideMenu} from 'components/pages/layout/SideMenu';
import {TopBar} from 'components/pages/layout/TopBar';
import APP_CONSTANTS from 'constants/app.constants';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {PageContainer} from 'components/pages/layout/Page';


const styles = theme => ({
    root: {
        position: 'absolute',
        top: 64,
        left: 0,
        bottom: 0,
        right: 0,
        [theme.breakpoints.down('xs')]: {
            top: 56,
        }
    },
});

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        const {classes, location} = this.props;
        return (
            <React.Fragment>
                <TopBar/>
                <SideMenu/>
                <div className={classes.root}>
                    <TransitionGroup>
                        <CSSTransition timeout={300} key={location.key} classNames="fade">
                            <PageContainer>
                                <Switch location={location}>
                                    <Route path={APP_CONSTANTS.routes.root} exact component={HomePage}/>
                                    <Route path={APP_CONSTANTS.routes.hideouts.root} component={HideoutsPage}/>
                                    <Route path={APP_CONSTANTS.routes.incursions.root} component={IncursionsPage}/>
                                    <Route path={APP_CONSTANTS.routes.import_export.root} component={ImportExportPage}/>
                                    <Route path={APP_CONSTANTS.routes.settings.root} component={SettingsPage}/>
                                    <Route component={NotFoundPage}/>
                                </Switch>
                            </PageContainer>
                        </CSSTransition>
                    </TransitionGroup>
                </div>
            </React.Fragment>
        );
    }
}

export default compose(
    withRouter,
    connect(
        null,
        dispatch => ({
            initializeApp: () => (dispatch(initializeApp())),
        }),
    ),
    withStyles(styles)
)(App);
