export function toggleUnlockedHideout(unlockedList: string[], hideout: string): string[] {
    const found = (unlockedList.findIndex(item => item === hideout) !== -1);
    return found
        ? unlockedList.filter(item => item !== hideout)
        : [...unlockedList, hideout];
}

export function importHideoutData(unlockedList: string[], data: any, options: any, keys: any): string[] {
    const ignoreImport = options && !!options[keys.ignoreKey];
    if (!ignoreImport) {
        return data && data.hideout && data.hideout[keys.dataKey]
            ? data.hideout[keys.dataKey]
            : [];
    }
    return unlockedList;
}