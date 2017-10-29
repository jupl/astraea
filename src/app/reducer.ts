import * as Common from '../common/reducer'

/** Structure of application state */
export type State = Common.State // = Domain1 & Domain2 & ...

/** Reducer creator for potential extra reducers */
export const createReducer = Common.createReducerCreator<State>({})
