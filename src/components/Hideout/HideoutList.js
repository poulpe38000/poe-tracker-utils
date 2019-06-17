import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';

import HideoutListItem from 'components/Hideout/HideoutListItem';
import EmptyResults from 'components/shared/EmptyResults';
import {filterHideouts, getUnlockedHideoutData} from 'components/Hideout/functions';
import HideoutListHeader from 'components/Hideout/Header/HideoutListHeader';

const styles = {
    list: {
        paddingTop: 0,
    },
    notFound: {
        display: 'flex',
        justifyContent: 'center',
    },
};

class HideoutList extends React.Component {

    render() {
        const {classes, searchText, filters, unlockedHideouts} = this.props;
        const data = getUnlockedHideoutData(unlockedHideouts);
        const filteredData = filterHideouts(data, filters, searchText);
        return (
            <React.Fragment>
                <Paper elevation={2}>
                    <List className={classes.list} disablePadding>
                        <HideoutListHeader noDivider={filteredData.length === 0}/>
                        {filteredData
                            .map((hideout, idx) => (
                                <HideoutListItem key={hideout.id}
                                                 hideout={hideout}
                                                 noDivider={idx === filteredData.length - 1}/>
                            ))}
                    </List>
                </Paper>
                {filteredData.length === 0 && <EmptyResults/>}
            </React.Fragment>
        );
    }
}

export default compose(
    connect(
        state => ({
            unlockedHideouts: state.hideout.unlocked,
            searchText: state.hideout.searchText,
            filters: state.hideout.filters,
        }),
    ),
    withStyles(styles)
)(HideoutList);