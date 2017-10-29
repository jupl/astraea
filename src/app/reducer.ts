import * as Common from '../common/reducer'

/** Structure of application state */
// tslint:disable-next-line:interface-over-type-literal
export type State = Common.State // = Domain1 & Domain2 & ...

/** Reducer creator for potential extra reducers */
export const createReducer = Common.createReducerCreator<State>({})
