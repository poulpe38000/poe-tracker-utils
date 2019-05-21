import React from 'react';
import {connect} from 'react-redux';
import {Divider, List, ListItem, Paper, Typography, withStyles} from '@material-ui/core';
import HIDEOUT_CONSTANTS from 'constants/hideout.constants';
import {HideoutListHeader, HideoutListItem} from 'components/Hideout';

const styles = {
    notFound: {
        display: 'flex',
        justifyContent: 'center',
    },
};

const yesNoFilter = {
    true: 'Yes',
    false: 'No'
};

function findText(text, hideout) {
    return text === ''
        || hideout.name.toLowerCase().search(text.toLowerCase()) !== -1
        || hideout.location
            .findIndex(location => location.toLowerCase().search(text.toLowerCase()) !== -1) !== -1;
}

function applyFilters(filters, hideout) {
    const filterKeys = Object.keys(filters);
    return filterKeys.length === 0
        || filterKeys
            .every(filterKey => {
                const values = filters[filterKey];
                return (values.length === 0)
                    || (Array.isArray(values) && values.findIndex(val => val === hideout[filterKey].toString()) !== -1)
                    || (hideout[filterKey].toString() === values.toString());
            });
}

class HideoutList extends React.Component {

    filterOptions = [
        {id: 'unlocked', label: 'Unlocked', filterOptions: yesNoFilter,},
        {id: 'rarity', label: 'Rarity', filterType: 'multiselect', filterOptions: HIDEOUT_CONSTANTS.rarity,},
        {id: 'fromMap', label: 'Found in Maps', filterOptions: yesNoFilter,},
        {id: 'fromMtx', label: 'Show MTX', filterOptions: yesNoFilter,},
    ];

    render() {
        const {classes, searchText, filters} = this.props;
        const data = HIDEOUT_CONSTANTS
            .hideouts
            .map(hideout => ({
                    ...hideout,
                    unlocked: !!this.props.unlockedHideouts.find(hideoutId => hideoutId === hideout.id)
                })
            )
            .filter(hideout => applyFilters(filters, hideout))
            .filter(hideout => findText(searchText, hideout));
        return (
            <Paper>
                <HideoutListHeader title="Hideouts list" filterOptions={this.filterOptions}/>
                <Divider/>
                <List>
                    {data.length === 0 && (
                        <ListItem dense className={classes.notFound}>
                            <Typography variant="h6"><em>No Hideouts found</em></Typography>
                        </ListItem>
                    )}
                    {data
                        .map((hideout, idx) => (
                            <React.Fragment>
                                <HideoutListItem key={hideout.id} hideout={hideout}/>
                                {idx < data.length - 1 && <Divider/>}
                            </React.Fragment>
                        ))}
                </List>
            </Paper>
        );
    }
}

export default connect(
    state => ({
        unlockedHideouts: state.hideout.unlocked,
        searchText: state.hideout.searchText,
        filters: state.hideout.filters,
    }),
)(withStyles(styles)(HideoutList));