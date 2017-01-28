import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import ColorPage, {Props as TemplateProps, Actions} from './template'
import {nextColor, previousColor} from '../../actions'
import {State} from '../../reducer'

/** Properties for wrapped component */
interface Props {
  readonly className?: string
}

/** Wrap color page component with data from store */
export default connect(props, actions)(ColorPage)

/**
 * Add Redux store data as properties to component
 * @param store Current state from Redux store
 * @param props Wrapped component properties
 * @return Props to pass to component
 */
export function props({color}: State, ownProps: Props): TemplateProps {
  return {...ownProps, color}
}

/**
 * Add Redux store action dispatches as properties to component
 * @param dispatch Redux store dispatch function
 * @return Props to pass to component
 */
export function actions(dispatch: Dispatch<State>): Actions {
  return {
    onNextColor: () => dispatch(nextColor()),
    onPreviousColor: () => dispatch(previousColor()),
  }
}
