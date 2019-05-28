import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {AppBar, Tab, Tabs, withStyles} from '@material-ui/core';
import {compose} from 'redux';

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

    constructor(props) {
        super(props);
        this.tabs = [
            {label: 'Hideouts unlocks', to: '/hideout', value: '/hideout'},
            {label: 'Incursion rooms', to: '/incursion', value: '/incursion'},
        ];
    }

    render() {
        const {history, match, classes} = this.props;
        return (
            <React.Fragment>
                <AppBar position="fixed" className={classes.root}>
                    <Tabs value={history.location.pathname} centered>
                        {this.tabs.map((tab, key) => (
                            <Tab component={Link} key={key} label={tab.label} to={`${match.path}${tab.to}`} value={`${match.path}${tab.value}`}/>
                        ))}
                    </Tabs>
                </AppBar>
            </React.Fragment>
        );
    }
}

export default compose(
    withRouter,
    withStyles(styles),
)(TrackersNavBar);
