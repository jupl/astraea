import {createReducerCreator} from '../common/reducer'
import * as posts from '../posts/reducer'

/** Structure of application state */
export type State = posts.State

/** Reducr creator for potential extra reducers */
export const createReducer = createReducerCreator<State>({
  posts: posts.reducer,
})
