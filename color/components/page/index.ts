import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import {nextColor, previousColor} from '../../actions'
import {State} from '../../reducer'
import * as template from './template'

/** Properties for wrapped component */
interface Props {
  readonly className?: string
}

/** Wrap color page component with data from store */
export const ColorPage = connect(props, actions)(template.ColorPage)

/**
 * Add Redux store data as properties to component
 * @param store Current state from Redux store
 * @param props Wrapped component properties
 * @return Props to pass to component
 */
export function props({color}: State, ownProps: Props): template.Props {
  return {...ownProps, color}
}

/**
 * Add Redux store action dispatches as properties to component
 * @param dispatch Redux store dispatch function
 * @return Props to pass to component
 */
export function actions(dispatch: Dispatch<State>): template.Actions {
  return {
    onNextColor: () => dispatch(nextColor()),
    onPreviousColor: () => dispatch(previousColor()),
  }
}
