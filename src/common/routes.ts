import {createAction} from 'redux-actions'
import {RoutesMap} from 'redux-first-router'

/** Navigation */
export const navigation = {
  home: createAction('COMMON_NAVIGATE_HOME'),
}

/** Application routes */
export const routes: RoutesMap = {
  [`${navigation.home}`]: '/',
}
