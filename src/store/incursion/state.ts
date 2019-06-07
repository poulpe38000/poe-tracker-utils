export interface IIncursionStateRoom {
    id: string;
    tier: number;
}

export interface IIncursionState {
    searchText: string,
    completed: IIncursionStateRoom[],
    in_progress: IIncursionStateRoom[],
}

const INITIAL_STATE: IIncursionState = {
    searchText: '',
    completed: [],
    in_progress: [],
};

export default INITIAL_STATE;