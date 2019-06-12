import React from 'react';
import List from '@material-ui/core/List';
import noop from 'lodash/noop';
import * as PropTypes from 'prop-types';

import SideMenuNavItem from 'components/layout/SideMenu/SideMenuNavItem';

class SideMenuNavList extends React.Component {
    static propTypes = {
        items: PropTypes.array.isRequired,
        expanded: PropTypes.bool,
        onClick: PropTypes.func,
    };

    static defaultProps = {
        expanded: false,
        onClick: noop
    };

    render() {
        const {expanded, onClick, items} = this.props;
        return (
            <List component="nav" disablePadding>
                {items.map((item, key) => (
                        <SideMenuNavItem key={key}
                                         link={{...item.link, onClick: onClick}}
                                         label={item.label}
                                         icon={item.icon}
                                         avatar={item.avatar}
                                         expanded={expanded}
                        />
                    )
                )}
            </List>
        );
    }
}

export default SideMenuNavList;
