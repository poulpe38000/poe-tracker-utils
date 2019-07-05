const yesNoFilter = {
    true: 'Yes',
    false: 'No'
};

export const hideoutRarity = {
    '1': 'Common',
    '10': 'Rare',
    '99': 'MTX-Only',
};

export const filterOptions = [
    {id: 'unlocked', label: 'Unlocked', filterOptions: yesNoFilter,},
    {id: 'rarity', label: 'Rarity', filterType: 'multiselect', filterOptions: hideoutRarity,},
    {id: 'fromMap', label: 'Found in Maps', filterOptions: yesNoFilter,},
    {id: 'fromMtx', label: 'Show MTX', filterOptions: yesNoFilter,},
];