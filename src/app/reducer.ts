import {combineReducers} from 'redux'
import color, {State as Color} from '../color/reducer'

/** Structure of application state */
export type State = Color

/** Combination of reducer subsets as a single reducer for Redux */
export default combineReducers<State>({color})
