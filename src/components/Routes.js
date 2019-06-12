import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {
    FilterEditorPage,
    HideoutsPage,
    HomePage,
    ImportExportPage,
    IncursionsPage,
    NotFoundPage,
    SettingsPage
} from 'components/pages';
import APP_CONSTANTS from 'constants/app.constants';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {compose} from 'redux';
import {withStyles} from '@material-ui/core';
import ContentWrapper from 'components/layout/ContentWrapper';


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

class Routes extends React.Component {
    state = {
        routes: [
            {path: APP_CONSTANTS.routes.root, component: HomePage, exact: true},
            {path: APP_CONSTANTS.routes.hideouts.root, component: HideoutsPage},
            {path: APP_CONSTANTS.routes.incursions.root, component: IncursionsPage},
            {path: APP_CONSTANTS.routes.filters.root, component: FilterEditorPage},
            {path: APP_CONSTANTS.routes.import_export.root, component: ImportExportPage},
            {path: APP_CONSTANTS.routes.settings.root, component: SettingsPage},
            {component: NotFoundPage},
        ]
    };

    render() {
        const {classes, location} = this.props;
        const {routes} = this.state;
        return (
            <div className={classes.root}>
                <TransitionGroup>
                    <CSSTransition timeout={300} key={location.key} classNames="fade">
                        <ContentWrapper>
                            <Switch location={location}>
                                {routes.map((route, key) => (<Route key={key} {...route}/>))}
                            </Switch>
                        </ContentWrapper>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        );
    }
}

export default compose(
    withRouter,
    withStyles(styles)
)(Routes);
