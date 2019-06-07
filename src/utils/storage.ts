const ALLOW_LOCAL_STORAGE = 'allowStorage';
const USE_LIGHT_THEME = 'useLightTheme';

export const HIDEOUT_UNLOCKED_STORAGE = 'hideoutUnlocked';
export const INCURSION_COMPLETED_STORAGE = 'incursionCompleted';
export const INCURSION_IN_PROGRESS_STORAGE = 'incursionInProgress';

export const getObj = <T>(key: string, fallback: T = {} as T): T => {
    try {
        if(getLocalStorageSettings()) {
            return JSON.parse(localStorage.getItem(key) || `${fallback}`);
        }
        return fallback;
    } catch (e) {
        return fallback;
    }
};

export const setObj = <T>(key: string, value: T): T => {
    if(getLocalStorageSettings()) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    return value;
};

export const clearObj = <T>(key: string, fallback: T = {} as T): T => {
    localStorage.removeItem(key);
    return fallback;
};

export const clearStorage = (): void => {
    localStorage.removeItem(HIDEOUT_UNLOCKED_STORAGE);
    localStorage.removeItem(INCURSION_COMPLETED_STORAGE);
    localStorage.removeItem(INCURSION_IN_PROGRESS_STORAGE);
};

export const getLocalStorageSettings = (): boolean => {
    return localStorage.getItem(ALLOW_LOCAL_STORAGE) === 'true';
};

export const toggleLocalStorageSettings = (): boolean => {
    const allowLocalStorage = localStorage.getItem(ALLOW_LOCAL_STORAGE) === 'true';
    allowLocalStorage
        ? localStorage.removeItem(ALLOW_LOCAL_STORAGE)
        : localStorage.setItem(ALLOW_LOCAL_STORAGE, 'true');
    return !allowLocalStorage;
};

export const getUseLightThemeSettings = (): boolean => {
    return localStorage.getItem(USE_LIGHT_THEME) === 'true';
};

export const toggleUseLightThemeSettings = (): boolean => {
    const useLightTheme = localStorage.getItem(USE_LIGHT_THEME) === 'true';
    useLightTheme
        ? localStorage.removeItem(USE_LIGHT_THEME)
        : localStorage.setItem(USE_LIGHT_THEME, 'true');
    return !useLightTheme;
};
