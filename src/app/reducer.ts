import {combineReducers, Dispatch} from 'redux'

/** Structure of application state */
export type State = {} // Replace with Domain1 & Domain 2 & ...

/** Dispatcher bound to application state */
export type Dispatch = Dispatch<State>

/** Combination of reducer subsets as a single reducer for Redux */
export default combineReducers<State>({})
