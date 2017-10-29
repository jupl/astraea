import {RoutesMap} from 'redux-first-router'
import * as Common from '../common/routes'
import * as Posts from '../posts/routes'

/** Application navigation */
export const navigation = {
  ...Common.navigation,
  ...Posts.navigation,
}

/** Application routes */
export const routes: RoutesMap = {
  ...Common.routes,
  ...Posts.routes,
}
