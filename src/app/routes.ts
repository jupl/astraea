import {RoutesMap} from 'redux-first-router'
import * as Common from '../common/routes'
import * as Posts from '../posts/routes'

/** Application routes */
export const routes: RoutesMap = {
  ...Common.routes,
  ...Posts.routes,
}
