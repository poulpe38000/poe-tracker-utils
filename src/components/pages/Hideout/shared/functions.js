import HIDEOUT_CONSTANTS from 'data/hideout.constants';

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

export function filterHideouts(data, filters, text) {
    return data
        .filter(hideout => applyFilters(filters, hideout))
        .filter(hideout => findText(text, hideout));
}

export function getUnlockedHideoutData(unlockedHideouts = []) {
    return HIDEOUT_CONSTANTS
        .hideouts
        .map(hideout => ({
                ...hideout,
                unlocked: !!unlockedHideouts.find(hideoutId => hideoutId === hideout.id)
            })
        );
}