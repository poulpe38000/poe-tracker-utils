import React from 'react';
import {connect} from 'react-redux';
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import {HIDEOUT_CONSTANTS, HIDEOUT_RARITIES} from 'constants/hideout';
import {hideoutToggleUnlocked} from 'store/hideout/actions';
import {YesNo, ExtendedTable} from 'components/shared';
import {Icon} from '@material-ui/core';

class HideoutTable extends React.Component {

    cols = [
        {
            id: 'name',
            label: 'Name',
            options: {
                filtrable: false,
            },
            cellOptions: {component: 'th', scope: 'row'},
        },
        {
            id: 'rarity',
            label: 'Rarity',
            options: {
                searchable: false,
                filterOptions: HIDEOUT_RARITIES,
                filterType: 'multiselect',
                renderValue: row => HIDEOUT_RARITIES[row.rarity]
            },
            headerOptions: {align: 'right'},
            cellOptions: {align: 'right'},
        },
        {
            id: 'location',
            label: 'Location(s)',
            options: {
                filtrable: false,
                renderValue: (row) => row.location.join(', '),
            },
            headerOptions: {align: 'right'},
            cellOptions: {align: 'right'},
        },
        {
            id: 'fromMap',
            label: 'Map',
            options: {
                searchable: false,
                filterLabel: 'Found in Maps',
                filterOptions: {
                    true: 'Yes',
                    false: 'No'
                },
                renderCell: row => <YesNo value={row.fromMap}/>,
            },
            headerOptions: {align: 'right'},
            cellOptions: {align: 'right'},
        },
        {
            id: 'fromMtx',
            label: 'MTX',
            options: {
                searchable: false,
                filterLabel: 'Show MTX',
                filterOptions: {
                    true: 'Yes',
                    false: 'No'
                },
                renderCell: row => <YesNo value={row.fromMtx}/>,
            },
            headerOptions: {align: 'right'},
            cellOptions: {align: 'right'},
        },
        {
            id: 'unlocked',
            label: 'Unlocked',
            options: {
                searchable: false,
                filterOptions: {
                    true: 'Yes',
                    false: 'No'
                },
                renderCell: row => {
                    return (<Icon component={row.unlocked ? CheckIcon : CloseIcon}
                                  onClick={this.hideoutToggleUnlocked(row.id)}/>);
                }
            },
            headerOptions: {align: 'right'},
            cellOptions: {align: 'right'},
        },
    ];

    hideoutToggleUnlocked = (hideoutId) => () => {
        this.props.hideoutToggleUnlocked(hideoutId);
    };

    render() {
        const data = HIDEOUT_CONSTANTS
            .map(hideout => ({
                    ...hideout,
                    unlocked: !!this.props.unlockedHideouts.find(hideoutId => hideoutId === hideout.id)
                })
            );
        return (
            <Paper>
                <ExtendedTable data={data} cols={this.cols} title="Hideouts unlock tracker"/>
            </Paper>
        );
    }
}

export default connect(
    state => ({
        unlockedHideouts: state.hideout.unlocked,
    }),
    dispatch => ({
        hideoutToggleUnlocked: hideoutId => (dispatch(hideoutToggleUnlocked(hideoutId))),
    }),
)(HideoutTable);
