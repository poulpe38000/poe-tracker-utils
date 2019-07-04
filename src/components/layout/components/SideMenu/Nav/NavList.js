import React from 'react';
import List from '@material-ui/core/List';
import noop from 'lodash/noop';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

import NavItem from 'components/layout/components/SideMenu/Nav/NavItem';
import NavSpacer from 'components/layout/components/SideMenu/Nav/NavSpacer';

const styles = {
    root: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
    },
};

class NavList extends React.Component {
    static propTypes = {
        items: PropTypes.array.isRequired,
        expanded: PropTypes.bool,
        onClick: PropTypes.func,
    };

    static defaultProps = {
        expanded: false,
        onClick: noop
    };

    renderNavItem(key, item) {
        const {expanded, onClick} = this.props;
        return (
            <NavItem key={key}
                     link={{...item.link, onClick: onClick}}
                     label={item.label}
                     icon={item.icon}
                     avatar={item.avatar}
                     expanded={expanded}
            />
        );
    }

    render() {
        const {classes, items} = this.props;
        return (
            <List component="nav" disablePadding className={classes.root}>
                {items.map((item, key) => {
                        return item.type === 'spacer'
                            ? (<NavSpacer key={key}/>)
                            : this.renderNavItem(key, item);
                    }
                )}
            </List>
        );
    }
}

export default withStyles(styles)(NavList);
