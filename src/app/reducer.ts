import {createReducerCreator} from '../common/reducer'

/** Structure of application state */
// tslint:disable-next-line:interface-over-type-literal
export type State = {} // = Domain1 & Domain2 & ...

/** Reducr creator for potential extra reducers */
export const createReducer = createReducerCreator<State>({})
