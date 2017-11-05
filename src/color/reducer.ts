import {Action, handleActions} from 'redux-actions'
import {autoNextColor, nextColor, previousColor} from './actions'
import {COLORS} from './config'

/** Structure of color state */
type Color = string

/** Structure of color state relative to application reducer */
export interface State {
  color: Color
}

/** Reducer that handles color related actions */
export const reducer = handleActions({
  [`${previousColor}`]: setPreviousColor,
  [`${nextColor}`]: setNextColor,
  [`${autoNextColor}`]: setNextColor,
}, COLORS[0])

/**
 * Update state to go to the previous color. If past the first color, go to the
 * end of the color list.
 * @param state Current color state
 * @param _action Unused dispatched action
 * @return Previous color state
 */
function setPreviousColor(state: Color, _action: Action<void>): Color {
  const oldIndex = COLORS.indexOf(state)
  const newIndex = (oldIndex + COLORS.length - 1) % COLORS.length
  return COLORS[newIndex]
}

/**
 * Update state to go to the next color. If past the last color, go to the
 * beginning of the color list.
 * @param state Current color state
 * @param _action Unused dispatched action
 * @return Next color state
 */
function setNextColor(state: Color, _action: Action<void>): Color {
  const oldIndex = COLORS.indexOf(state)
  const newIndex = (oldIndex + 1) % COLORS.length
  return COLORS[newIndex]
}
