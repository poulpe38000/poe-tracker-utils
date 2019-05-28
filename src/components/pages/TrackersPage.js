import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import TrackersNavBar from 'components/Trackers/TrackersNavBar';
import {withStyles} from '@material-ui/core';
import {compose} from 'redux';
import {Page} from 'components/pages/layout/Page';
import {HideoutList} from 'components/Hideout';
import {IncursionList} from 'components/Incursion';
import {NotFoundPage} from 'components/pages/index';

const styles = {
    root: {
        paddingTop: 48,
        flexGrow: 1,
    },
};

class TrackersPage extends React.Component {
    componentWillMount() {
        this.unlisten = this.props.history.listen(() => {
            this.checkDefaultRoute();
        });
        this.checkDefaultRoute();
    }

    checkDefaultRoute() {
        if (this.props.history.location.pathname === '/trackers') {
            this.props.history.replace('/trackers/hideout');
        }
    }

    componentWillUnmount() {
        this.unlisten();
    }

    render() {
        const {match, classes} = this.props;
        return (
            <React.Fragment>
                <TrackersNavBar/>
                <div className={classes.root}>
                    <Page>
                        <Switch>
                            <Route path={`${match.path}/hideout`} component={HideoutList}/>
                            <Route path={`${match.path}/incursion`} component={IncursionList}/>
                            <Route render={props => (
                                <NotFoundPage {...props} to={`${match.path}`} />
                            )}/>
                        </Switch>
                    </Page>
                </div>
            </React.Fragment>
        );
    }
}

export default compose(
    withRouter,
    withStyles(styles)
)(TrackersPage);
