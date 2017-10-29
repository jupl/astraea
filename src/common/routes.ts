import {RoutesMap} from 'redux-first-router'
import {navigateHome} from './actions'

/** Application routes */
export const routes: RoutesMap = {
  [`${navigateHome}`]: '/',
}
