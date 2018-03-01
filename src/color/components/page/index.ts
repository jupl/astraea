import {connect} from 'react-redux'
import {nextColor, previousColor} from '../../actions'
import {State} from '../../reducer'
import * as Template from './template'

const actions: Template.Actions = {
  onNextColor: nextColor,
  onPreviousColor: previousColor,
}

/** Properties for wrapped component */
export interface Props {
  /** Class name */
  className?: string
}

/** Wrap color page component with data from store */
export const ColorPage = connect(props, actions)(Template.ColorPage)

/**
 * Add Redux store data as properties to component
 * @param store Current state from Redux store
 * @param _props Wrapped component properties
 * @return Props to pass to component
 */
export function props({color}: State, _props: Props): Template.Props {
  return {color}
}
