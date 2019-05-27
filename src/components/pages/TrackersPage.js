import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import TrackersNavBar from 'components/Trackers/TrackersNavBar';
import {HideoutPage, IncursionPage} from 'components/pages/index';
import {withStyles} from '@material-ui/core';
import {compose} from 'redux';

const styles = theme => ({
    root: {
        paddingTop: 48,
        flexGrow: 1,
    },
});

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
                    <Route path={`${match.path}/hideout`} component={HideoutPage}/>
                    <Route path={`${match.path}/incursion`} component={IncursionPage}/>
                </div>
            </React.Fragment>
        );
    }
}

export default compose(
    withRouter,
    withStyles(styles)
)(TrackersPage);
