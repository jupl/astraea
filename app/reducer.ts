import {combineReducers} from 'redux'
import * as color from '../color/reducer'

/** Structure of application state */
export type State = color.State

/** Combination of reducer subsets as a single reducer for Redux */
export const reducer = combineReducers<State>({color: color.reducer})
