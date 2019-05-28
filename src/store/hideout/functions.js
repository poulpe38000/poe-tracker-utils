export function toggleUnlockedHideout(unlockedList, hideout) {
    const found = (unlockedList.findIndex(item => item === hideout) !== -1);
    return found
        ? unlockedList.filter(item => item !== hideout)
        : [...unlockedList, hideout];
}

export function importHideoutData(unlockedList, data, options, keys) {
    const ignoreImport = options && !!options[keys.ignoreKey];
    if (!ignoreImport) {
        return data && data.hideout && data.hideout[keys.dataKey]
            ? data.hideout[keys.dataKey]
            : [];
    }
    return unlockedList;
}