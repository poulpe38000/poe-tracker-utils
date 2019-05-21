export const getObj = (key, fallback = {}) => {
    try {
        return JSON.parse(localStorage.getItem(key)) || fallback;
    }catch (e) {
        return fallback;
    }
};

export const setObj = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
    return value;
};

export const clearObj = (key, fallback = {}) => {
    localStorage.removeItem(key);
    return fallback;
};
