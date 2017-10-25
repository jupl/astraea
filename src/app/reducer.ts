import * as Color from '../color/reducer'
import {createReducerCreator} from '../common/reducer'

/** Structure of application state */
export type State = Color.State

/** Reducer creator for potential extra reducers */
export const createReducer = createReducerCreator<State>({})
