export interface IHideoutState {
    searchText: string;
    filters: any;
    unlocked: string[];
}

const INITIAL_STATE: IHideoutState = {
    searchText: '',
    filters: {},
    unlocked: []
};

export default INITIAL_STATE;
