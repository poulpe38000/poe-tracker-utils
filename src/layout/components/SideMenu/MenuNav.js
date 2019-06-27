import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import withWidth, {isWidthDown} from '@material-ui/core/withWidth';
import noop from 'lodash/noop';
import * as PropTypes from 'prop-types';

import {rootActions} from 'store/root/actions';
import {sideMenuElements} from 'layout/components/SideMenu/constants';
import NavList from 'layout/components/SideMenu/Nav/NavList';
import MenuTopBar from 'layout/components/SideMenu/MenuTopBar';

class MenuNav extends React.Component {
    static propTypes = {
        expanded: PropTypes.bool.isRequired,
    };

    render() {
        const {toggleSidenav, width, expanded} = this.props;
        return (
            <React.Fragment>
                <MenuTopBar/>
                <NavList
                    items={sideMenuElements}
                    expanded={!isWidthDown('xs', width) && expanded}
                    onClick={isWidthDown('xs', width) ? toggleSidenav : noop}
                />
            </React.Fragment>
        );
    }
}

export default compose(
    withRouter,
    connect(
        null,
        {
            toggleSidenav: rootActions.toggleSidenav,
        },
    ),
    withWidth(),
)(MenuNav);
