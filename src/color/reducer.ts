import {handleActions} from 'redux-actions'
import {previousColor, nextColor, autoNextColor} from './actions'
import {COLORS} from './config'

/** Structure of color state */
type Color = string

/** Structure of color state relative to application reducer */
export interface State {
  readonly color: Color
}

/** Reducer that handles color related actions */
export default handleActions({
  [`${previousColor}`]: setPreviousColor,
  [`${nextColor}`]: setNextColor,
  [`${autoNextColor}`]: setNextColor,
}, COLORS[0])

/**
 * Update state to go to the previous color. If past the first color, go to the
 * end of the color list.
 * @param color Current color state
 * @return Previous color state
 */
function setPreviousColor(color: Color) {
  const oldIndex = COLORS.indexOf(color)
  const newIndex = (oldIndex + COLORS.length - 1) % COLORS.length
  return COLORS[newIndex]
}

/**
 * Update state to go to the next color. If past the last color, go to the
 * beginning of the color list.
 * @param color Current color state
 * @return Next color state
 */
function setNextColor(color: Color) {
  const oldIndex = COLORS.indexOf(color)
  const newIndex = (oldIndex + 1) % COLORS.length
  return COLORS[newIndex]
}
