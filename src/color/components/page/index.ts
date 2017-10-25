import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import {nextColor, previousColor} from '../../actions'
import {IState} from '../../reducer'
import * as Template from './template'

/** Properties for wrapped component */
interface IProps {
  /** Class name */
  readonly className?: string
}

/** Wrap color page component with data from store */
export const ColorPage = connect(props, actions)(Template.ColorPage)

/**
 * Add Redux store data as properties to component
 * @param store Current state from Redux store
 * @param _props Wrapped component properties
 * @return Props to pass to component
 */
export function props({color}: IState, _props: IProps): Template.IProps {
  return {color}
}

/**
 * Add Redux store action dispatches as properties to component
 * @param dispatch Redux store dispatch function
 * @return Props to pass to component
 */
export function actions(dispatch: Dispatch<IState>): Template.IActions {
  return {
    onNextColor: () => dispatch(nextColor()),
    onPreviousColor: () => dispatch(previousColor()),
  }
}
