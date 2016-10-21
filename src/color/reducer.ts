import {handleActions} from 'redux-actions'
import {previousColor, nextColor, autoNextColor} from './actions'
import {COLORS} from './config'

/** Structure of color state */
export type State = string

/** Reducer that handles color related actions */
export default handleActions({
  [`${previousColor}`]: setPreviousColor,
  [`${nextColor}`]: setNextColor,
  [`${autoNextColor}`]: setNextColor,
}, COLORS[0])

/**
 * Update state to go to the previous color. If past the first color, go to the
 * end of the color list.
 * @param state Current color state
 * @return Previous color state
 */
function setPreviousColor(state: State) {
  const oldIndex = COLORS.indexOf(state)
  const newIndex = (oldIndex + COLORS.length - 1) % COLORS.length
  return COLORS[newIndex]
}

/**
 * Update state to go to the next color. If past the last color, go to the
 * beginning of the color list.
 * @param state Current color state
 * @return Next color state
 */
function setNextColor(state: State) {
  const oldIndex = COLORS.indexOf(state)
  const newIndex = (oldIndex + 1) % COLORS.length
  return COLORS[newIndex]
}
