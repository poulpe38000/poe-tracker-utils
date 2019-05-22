const ALLOW_LOCAL_STORAGE = 'allowStorage';
export const HIDEOUT_UNLOCKED_STORAGE = 'hideoutUnlocked';
export const INCURSION_COMPLETED_STORAGE = 'incursionCompleted';
export const INCURSION_IN_PROGRESS_STORAGE = 'incursionInProgress';

export const getObj = (key, fallback = {}) => {
    try {
        if(getLocalStorageSettings()) {
            return JSON.parse(localStorage.getItem(key)) || fallback;
        }
        return fallback;
    } catch (e) {
        return fallback;
    }
};

export const setObj = (key, value) => {
    if(getLocalStorageSettings()) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    return value;
};

export const clearObj = (key, fallback = {}) => {
    localStorage.removeItem(key);
    return fallback;
};

export const clearStorage = () => {
    localStorage.removeItem(HIDEOUT_UNLOCKED_STORAGE);
    localStorage.removeItem(INCURSION_COMPLETED_STORAGE);
    localStorage.removeItem(INCURSION_IN_PROGRESS_STORAGE);
};

export const getLocalStorageSettings = () => {
    return localStorage.getItem(ALLOW_LOCAL_STORAGE) === 'true';
};

export const toggleLocalStorageSettings = () => {
    const allowLocalStorage = localStorage.getItem(ALLOW_LOCAL_STORAGE) === 'true';
    allowLocalStorage
        ? localStorage.removeItem(ALLOW_LOCAL_STORAGE)
        : localStorage.setItem(ALLOW_LOCAL_STORAGE, 'true');
    return !allowLocalStorage;
};
