export interface IMainState {
    useLightTheme: boolean;
    sidenavExpanded: boolean;
}

const INITIAL_STATE: IMainState = {
    useLightTheme: false,
    sidenavExpanded: false,
};

export default INITIAL_STATE;
