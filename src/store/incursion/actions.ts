import {AnyAction} from 'redux';
import {IIncursionRoom} from 'interfaces/incursion';

export enum ACTION_TYPE {
    TOGGLE_IN_PROGRESS = 'INCURSION_ROOM_TOGGLE_IN_PROGRESS',
    TOGGLE_COMPLETED = 'INCURSION_ROOM_TOGGLE_COMPLETED',
    VALIDATE_IN_PROGRESS = 'INCURSION_ROOM_VALIDATE_IN_PROGRESS',
    UPDATE_SEARCH_TEXT = 'INCURSION_UPDATE_SEARCH_TEXT',
    RESET_IN_PROGRESS_DATA = 'INCURSION_RESET_IN_PROGRESS_DATA',
    RESET_COMPLETED_DATA = 'INCURSION_RESET_COMPLETED_DATA',
}

export const incursionActions = {
    toggleInProgress: (payload: IIncursionRoom): AnyAction => ({type: ACTION_TYPE.TOGGLE_IN_PROGRESS, payload}),
    toggleCompleted: (payload: IIncursionRoom): AnyAction => ({type: ACTION_TYPE.TOGGLE_COMPLETED, payload}),
    validateInProgress: (): AnyAction => ({type: ACTION_TYPE.VALIDATE_IN_PROGRESS}),
    updateSearchText: (payload: string): AnyAction => ({type: ACTION_TYPE.UPDATE_SEARCH_TEXT, payload}),
    resetInProgressData: (): AnyAction => ({type: ACTION_TYPE.RESET_IN_PROGRESS_DATA}),
    resetCompletedData: (): AnyAction => ({type: ACTION_TYPE.RESET_COMPLETED_DATA}),
};