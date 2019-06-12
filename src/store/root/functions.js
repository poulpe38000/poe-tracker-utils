import {getUseLightThemeSettings, toggleUseLightThemeSettings} from 'utils/storage';

export function toggleSidenav(state) {
    return !state;
}

export function toggleTheme() {
    return toggleUseLightThemeSettings();
}

export function initializeApp(state) {
    try {
        return getUseLightThemeSettings();
    } catch (e) {
        return state;
    }
}