import {createAction} from 'redux-actions'
import {RoutesMap} from 'redux-first-router'

/** Navigate payload */
export interface PostPayload {
  id: number
}

/** Navigation */
export const navigation = {
  addPost: createAction('POSTS_NAVIGATE_ADD'),
  post: createAction<PostPayload>('POSTS_NAVIGATE_POST'),
}

/** Application routes */
export const routes: RoutesMap = {
  [`${navigation.addPost}`]: '/posts/new',
  [`${navigation.post}`]: '/posts/:id',
}
