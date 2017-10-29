import {connect} from 'react-redux'
import {PostsList} from '../../../posts/components/list'
import {State} from '../../reducer'
import {navigation} from '../../routes'
import * as Template from './template'

/** Wrap app root component with data from store */
export const AppRoot = connect(props)(Template.AppRoot)

/**
 * Determine component to show based on state
 * @return Props to pass to component
 */
export function props({location: {type}}: State): Template.Props {
  const nav = Object.values(navigation).find(action => `${action}` === type)
  let component: Template.Props['component']
  switch(nav) {
  default:
    component = PostsList
    break
  }
  return {component}
}
