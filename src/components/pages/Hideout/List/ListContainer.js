import React from 'react';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';

import HideoutListItem from 'components/pages/Hideout/List/HideoutListItem';
import HeaderContainer from 'components/pages/Hideout/List/Header/HeaderContainer';

const styles = {
    list: {
        paddingTop: 0,
    },
};

class ListContainer extends React.Component {
    static propTypes = {
        items: PropTypes.array.isRequired
    };

    render() {
        const {classes, items} = this.props;
        return (
            <Paper elevation={2}>
                <List className={classes.list} disablePadding>
                    {items.length > 0 && <HeaderContainer noDivider={items.length === 0}/>}
                    {items
                        .map((hideout, idx) => (
                            <HideoutListItem key={hideout.id}
                                             hideout={hideout}
                                             noDivider={idx === items.length - 1}/>
                        ))}
                </List>
            </Paper>
        );
    }
}

export default withStyles(styles)(ListContainer);