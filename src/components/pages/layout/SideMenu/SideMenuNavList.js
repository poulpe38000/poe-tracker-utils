import React from 'react';
import {List} from '@material-ui/core';
import {SideMenuNavItem} from 'components/pages/layout/SideMenu';
import noop from 'lodash/noop';
import * as PropTypes from 'prop-types';

class SideMenuNavList extends React.Component {

    static propTypes = {
        items: PropTypes.array.isRequired,
        showTooltip: PropTypes.bool,
        onClick: PropTypes.func,
    };

    static defaultProps = {
        showTooltip: false,
        onClick: noop
    };

    render() {
        const {showTooltip, onClick, items} = this.props;
        return (
            <List component="nav" disablePadding>
                {items.map((item, key) => (
                        <SideMenuNavItem key={key}
                                         to={item.to}
                                         label={item.label}
                                         icon={item.icon}
                                         avatar={item.avatar}
                                         exact={item.exact}
                                         showTooltip={showTooltip}
                                         onClick={onClick}
                        />
                    )
                )}
            </List>
        );
    }
}

export default SideMenuNavList;
