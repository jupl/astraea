import {Action as ReduxAction, createAction} from 'redux-actions'
import {Post} from './graphql'

/** Create action to change selected post detail */
export namespace setSelectedDetail {
  export type Payload = Post['id'] | undefined
  export type Action = ReduxAction<Payload>
}
export const setSelectedDetail = createAction<setSelectedDetail.Payload>('POSTS_SET_SELECTED_DETAIL')

export const g = setSelectedDetail(1)
