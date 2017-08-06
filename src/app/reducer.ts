import * as color from '../color/reducer'
import {createReducerCreator} from '../common/reducer'

/** Structure of application state */
export type RootState = color.State

/** Reducr creator for potential extra reducers */
export const createReducer = createReducerCreator<RootState>({
  color: color.reducer,
})
