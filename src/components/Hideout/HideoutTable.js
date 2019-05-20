import React from 'react';
import {connect} from 'react-redux';
import Paper from '@material-ui/core/Paper';
import {HIDEOUT_CONSTANTS, HIDEOUT_RARITIES} from 'constants/hideout';
import {hideoutToggleUnlocked} from 'store/hideout/actions';
import {ExtendedTable, YesNo} from 'components/shared';
import {Checkbox, withStyles} from '@material-ui/core';

const styles = {
    root: {
        width: '100%',
    },
};

class HideoutTable extends React.Component {

    cols = [
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
                    return (
                        <Checkbox
                            checked={row.unlocked}
                            onChange={this.hideoutToggleUnlocked(row.id)}
                            value="checked"
                        />
                    );
                }
            },
            headerOptions: {
                padding: 'checkbox',
                style: {width: '120px'},
            },
            cellOptions: {
                padding: 'checkbox'
            },
        },
        {
            id: 'name',
            label: 'Name',
            options: {
                filtrable: false,
            },
            cellOptions: {component: 'th', scope: 'row'},
        },
        {
            id: 'location',
            label: 'Location(s)',
            options: {
                filtrable: false,
                renderValue: (row) => row.location.join(', '),
            },
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
            headerOptions: {
                style: {width: '120px'},
            },
        },
        {
            id: 'fromMap',
            label: 'Map',
            options: {
                displayed: false,
                searchable: false,
                filterLabel: 'Found in Maps',
                filterOptions: {
                    true: 'Yes',
                    false: 'No'
                },
                renderCell: row => <YesNo value={row.fromMap}/>,
            },
        },
        {
            id: 'fromMtx',
            label: 'MTX',
            options: {
                displayed: false,
                searchable: false,
                filterLabel: 'Show MTX',
                filterOptions: {
                    true: 'Yes',
                    false: 'No'
                },
                renderCell: row => <YesNo value={row.fromMtx}/>,
            },
        },
    ];

    hideoutToggleUnlocked = (hideoutId) => () => {
        this.props.hideoutToggleUnlocked(hideoutId);
    };

    render() {
        const {classes} = this.props;
        const data = HIDEOUT_CONSTANTS
            .map(hideout => ({
                    ...hideout,
                    unlocked: !!this.props.unlockedHideouts.find(hideoutId => hideoutId === hideout.id)
                })
            );
        return (
            <Paper className={classes.root}>
                <ExtendedTable data={data} cols={this.cols} title="Hideouts list"/>
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
)(withStyles(styles)(HideoutTable));
