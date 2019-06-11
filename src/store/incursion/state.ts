import {IIncursionRoom} from 'interfaces/incursion';

export interface IIncursionState {
    searchText: string,
    completed: IIncursionRoom[],
    in_progress: IIncursionRoom[],
}