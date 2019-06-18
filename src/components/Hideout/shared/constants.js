import HIDEOUT_CONSTANTS from 'constants/hideout.constants';

const yesNoFilter = {
    true: 'Yes',
    false: 'No'
};

export const filterOptions = [
    {id: 'unlocked', label: 'Unlocked', filterOptions: yesNoFilter,},
    {id: 'rarity', label: 'Rarity', filterType: 'multiselect', filterOptions: HIDEOUT_CONSTANTS.rarity,},
    {id: 'fromMap', label: 'Found in Maps', filterOptions: yesNoFilter,},
    {id: 'fromMtx', label: 'Show MTX', filterOptions: yesNoFilter,},
];