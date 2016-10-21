import {combineReducers, Dispatch} from 'redux'
import color, {State as Color} from '../color/reducer'

/** Structure of application state */
export interface State {
  /** Color state */
  color: Color
}

/** Dispatcher bound to application state */
export type Dispatch = Dispatch<State>

/** Combination of reducer subsets as a single reducer for Redux */
export default combineReducers<State>({color})
