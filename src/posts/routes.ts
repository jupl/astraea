import {createAction} from 'redux-actions'
import {RoutesMap} from 'redux-first-router'

/** Navigate payload */
export interface PostPayload {
  id: number
}

/** Navigation */
export const navigation = {
  post: createAction<PostPayload>('POSTS_NAVIGATE_POST'),
}

/** Application routes */
export const routes: RoutesMap = {
  [`${navigation.post}`]: '/posts/:id',
}
