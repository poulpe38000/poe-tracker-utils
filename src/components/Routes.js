import React from 'react';
import {compose} from 'redux';
import {Route, Switch, withRouter} from 'react-router-dom';
import CSSTransition from 'react-transition-group/CSSTransition';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Box from '@material-ui/core/Box';
import withStyles from '@material-ui/core/styles/withStyles';

import APP_CONSTANTS from 'constants/app.constants';
import {
    FilterEditorPage,
    HideoutsPage,
    HomePage,
    ImportExportPage,
    IncursionsPage,
    NotFoundPage,
    SettingsPage
} from 'pages';
import ContentWrapper from 'layout/ContentWrapper';


const styles = ({breakpoints}) => ({
    root: {
        position: 'absolute',
        top: 64,
        left: 0,
        bottom: 0,
        right: 0,
        [breakpoints.down('xs')]: {
            top: 56,
        }
    },
});

class Routes extends React.Component {
    state = {
        routes: [
            {route: {path: APP_CONSTANTS.routes.root, component: HomePage, exact: true}},
            {route: {path: APP_CONSTANTS.routes.hideouts.root, component: HideoutsPage}},
            {route: {path: APP_CONSTANTS.routes.incursions.root, component: IncursionsPage}},
            {route: {path: APP_CONSTANTS.routes.filters.root, component: FilterEditorPage}},
            {route: {path: APP_CONSTANTS.routes.import_export.root, component: ImportExportPage}},
            {route: {path: APP_CONSTANTS.routes.settings.root, component: SettingsPage}},
            {route: {component: NotFoundPage}},
        ]
    };

    render() {
        const {classes, location} = this.props;
        const {routes} = this.state;
        return (
            <Box className={classes.root}>
                <TransitionGroup>
                    <CSSTransition timeout={300} key={location.key} classNames="fade">
                        <ContentWrapper>
                            <Switch location={location}>
                                {routes.map((route, key) => (<Route key={key} {...route.route}/>))}
                            </Switch>
                        </ContentWrapper>
                    </CSSTransition>
                </TransitionGroup>
            </Box>
        );
    }
}

export default compose(
    withRouter,
    withStyles(styles)
)(Routes);
