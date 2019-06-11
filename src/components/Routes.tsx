import React from 'react';
import {Route, RouteProps, Switch, withRouter} from 'react-router-dom';
import {createStyles, Theme, withStyles} from '@material-ui/core';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import APP_CONSTANTS from 'constants/app.constants';
import ContentWrapper from 'components/pages/layout/ContentWrapper';
import {
    FilterEditorPage,
    HideoutsPage,
    HomePage,
    ImportExportPage,
    IncursionsPage,
    NotFoundPage,
    SettingsPage
} from 'components/pages';

interface Props {
    classes: {
        root: string;
    };
    location: any;
}
interface States {
    routes: RouteProps[];
}

const styles = ({breakpoints}: Theme) => createStyles({
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

class Routes extends React.Component<Props, States> {
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
                                {routes.map((route: RouteProps, key: number) => (<Route key={key} {...route}/>))}
                            </Switch>
                        </ContentWrapper>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(Routes) as any);
