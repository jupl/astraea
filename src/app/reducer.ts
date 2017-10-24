import {createReducerCreator} from '../common/reducer'

/** Structure of application state */
// tslint:disable-next-line:no-empty-interface
export interface IState {} // Extend Domain1, Domain2, ...

/** Reducr creator for potential extra reducers */
export const createReducer = createReducerCreator<IState>({})
