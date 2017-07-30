import {handleActions} from 'redux-actions'
import * as actions from './actions'
import {Post} from './graphql'

/** Structure of posts state */
interface Posts {
  selectedDetail?: Post['id']
}

/** Structure of posts state relative to application reducer */
export interface State {
  readonly posts: Posts
}

/** Reducer that handles color related actions */
export const reducer = handleActions<Posts, {} | void>({
  [`${actions.setSelectedDetail}`]: setSelectedDetail,
}, {})

/**
 * Update state to go to the previous color. If past the first color, go to the
 * end of the color list.
 * @param color Current color state
 * @return Previous color state
 */
function setSelectedDetail(
  posts: Posts,
  {payload}: actions.setSelectedDetail.Action,
): Posts {
  return {...posts, selectedDetail: payload}
}
