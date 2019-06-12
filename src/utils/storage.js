export const STORAGE_KEYS = {
    ALLOW_LOCAL_STORAGE: 'allowStorage',
    USE_LIGHT_THEME: 'useLightTheme',

    HIDEOUT_UNLOCKED_STORAGE: 'hideoutUnlocked',
    INCURSION_COMPLETED_STORAGE: 'incursionCompleted',
    INCURSION_IN_PROGRESS_STORAGE: 'incursionInProgress',
};

export function getObj(key, fallback = {}) {
    try {
        if (getLocalStorageSettings()) {
            return JSON.parse(localStorage.getItem(key)) || fallback;
        }
        return fallback;
    } catch (e) {
        return fallback;
    }
}

export function setObj(key, value) {
    if (getLocalStorageSettings()) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    return value;
}

export function clearObj(key, fallback = {}) {
    localStorage.removeItem(key);
    return fallback;
}

export function clearStorage() {
    localStorage.removeItem(STORAGE_KEYS.HIDEOUT_UNLOCKED_STORAGE);
    localStorage.removeItem(STORAGE_KEYS.INCURSION_COMPLETED_STORAGE);
    localStorage.removeItem(STORAGE_KEYS.INCURSION_IN_PROGRESS_STORAGE);
}

export function getLocalStorageSettings() {
    return localStorage.getItem(STORAGE_KEYS.ALLOW_LOCAL_STORAGE) === 'true';
}

export function toggleLocalStorageSettings() {
    return toggleStorageItem(STORAGE_KEYS.ALLOW_LOCAL_STORAGE);
}

export function getUseLightThemeSettings() {
    return localStorage.getItem(STORAGE_KEYS.USE_LIGHT_THEME) === 'true';
}

export function toggleUseLightThemeSettings() {
    return toggleStorageItem(STORAGE_KEYS.USE_LIGHT_THEME);
}

function toggleStorageItem(key, value = 'true') {
    const valueSet = localStorage.getItem(key) === value;
    valueSet
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, value);
    return !valueSet;
}