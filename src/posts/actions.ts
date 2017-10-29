import {createAction} from 'redux-actions'

/** Navigate payload */
export interface NavigatePostPayload {
  id: number
}

/** Action to navigate to home page */
export const navigatePost = createAction<NavigatePostPayload>(
  'POSTS_NAVIGATE_POST')
