import * as color from '../color/reducer'
import {createReducerCreator} from '../common/reducer'

/** Structure of application state */
// tslint:disable-next-line:no-empty-interface
export type IState = color.IState

/** Reducer creator for potential extra reducers */
export const createReducer = createReducerCreator<IState>({})
