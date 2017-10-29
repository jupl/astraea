
import {RoutesMap} from 'redux-first-router'
import {navigatePost} from './actions'

/** Application routes */
export const routes: RoutesMap = {
  [`${navigatePost}`]: '/posts/:id',
}
