import * as Color from '../color/reducer'
import * as Common from '../common/reducer'

/** Structure of application state */
export type State = Common.State & Color.State

/** Reducer creator for potential extra reducers */
export const createReducer = Common.createReducerCreator<State>({})
