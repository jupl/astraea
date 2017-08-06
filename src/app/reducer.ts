import {createReducerCreator} from '../common/reducer'

/** Structure of application state */
export type RootState = {} // Replace with Domain1 & Domain2 & ...

/** Reducr creator for potential extra reducers */
export const createReducer = createReducerCreator<RootState>({})
