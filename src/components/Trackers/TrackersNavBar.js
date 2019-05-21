import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {AppBar, Tab, Tabs, withStyles} from '@material-ui/core';

const styles = theme => ({
    root: {
        zIndex: theme.zIndex.appBar -1,
        top: 64,
        [theme.breakpoints.down('xs')]: {
            top: 56,
        }
    },
});

class TrackersNavBar extends React.Component {
    render() {
        const {history, match, classes} = this.props;
        return (
            <React.Fragment>
                <AppBar position="fixed" className={classes.root}>
                    <Tabs value={history.location.pathname} centered>
                        <Tab component={Link} label="Hideouts unlocks" to={`${match.path}/hideout`} value={`${match.path}/hideout`}/>
                        <Tab component={Link} label="Incursion rooms" to={`${match.path}/incursion`}  value={`${match.path}/incursion`}/>
                    </Tabs>
                </AppBar>
            </React.Fragment>
        );
    }
}

export default withRouter(withStyles(styles)(TrackersNavBar));
