import React from 'react';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import noop from 'lodash/noop';
import * as PropTypes from 'prop-types';

import SideMenuNavItem from 'layout/SideMenuComponents/SideMenuNavItem';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
    root: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    spacer: {
        flex: '1 1 auto',
    },
};

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

    renderNavItem(key, item) {
        const {expanded, onClick} = this.props;
        return (
            <SideMenuNavItem key={key}
                             link={{...item.link, onClick: onClick}}
                             label={item.label}
                             icon={item.icon}
                             avatar={item.avatar}
                             expanded={expanded}
            />
        );
    }

    renderSpacer(key) {
        const {classes} = this.props;
        return (
            <Box key={key} className={classes.spacer}/>
        );
    }

    render() {
        const {classes, items} = this.props;
        return (
            <List component="nav" disablePadding className={classes.root}>
                {items.map((item, key) => {
                        return item.type === 'spacer'
                            ? this.renderSpacer(key)
                            : this.renderNavItem(key, item);
                    }
                )}
            </List>
        );
    }
}

export default withStyles(styles)(SideMenuNavList);
