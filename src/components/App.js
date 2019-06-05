import React from 'react';
import {connect} from 'react-redux';
import {initializeApp} from 'store/main/actions';
import {SideMenu} from 'components/pages/layout/SideMenu';
import {TopBar} from 'components/pages/layout/TopBar';
import Routes from 'components/Routes';


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        return (
            <React.Fragment>
                <TopBar/>
                <SideMenu/>
                <Routes/>
            </React.Fragment>
        );
    }
}

export default connect(
    null,
    dispatch => ({
        initializeApp: () => (dispatch(initializeApp())),
    }),
)(App);
