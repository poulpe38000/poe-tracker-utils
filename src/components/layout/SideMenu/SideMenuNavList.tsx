import React from 'react';
import {List} from '@material-ui/core';
import noop from 'lodash/noop';
import SideMenuNavItem from 'components/layout/SideMenu/SideMenuNavItem';

interface Props {
    items: any[],
    expanded: boolean,
    onClick(event: React.MouseEvent<HTMLElement>): void,
}

class SideMenuNavList extends React.Component<Props> {

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
