import {CSSProperties} from 'react'
import {connect} from 'react-redux'
import ColorPage, {Props as TemplateProps, Actions} from './template'
import {nextColor, previousColor} from '../../actions'
import {Dispatch, State} from '../../../app/reducer'

/** Properties for wrapped component */
interface Props {
  style?: CSSProperties
}

/** Wrap color page component with data from store */
export default connect(props, actions)(ColorPage)

/**
 * Add Redux store data as properties to component
 * @param store Current state from Redux store
 * @param props Wrapped component properties
 * @return Props to pass to component
 */
export function props({color}: State, {style}: Props): TemplateProps {
  return {color, style}
}

/**
 * Add Redux store action dispatches as properties to component
 * @param dispatch Redux store dispatch function
 * @return Props to pass to component
 */
export function actions(dispatch: Dispatch): Actions {
  return {
    onNextColor: () => dispatch(nextColor()),
    onPreviousColor: () => dispatch(previousColor()),
  }
}
