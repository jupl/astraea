import {createReducer} from 'hard-reducer'
import {Reducer} from 'redux'
import * as Actions from './actions'
import {COLORS} from './config'

/** Structure of color state relative to application reducer */
export interface State {
  color: Color
}

/** Structure of color state */
export type Color = string

/** Reducer that handles color related actions */
export const reducer = createReducer<Color>(COLORS[0])
  .case(Actions.previousColor, state => {
    const oldIndex = COLORS.indexOf(state)
    const newIndex = (oldIndex + COLORS.length - 1) % COLORS.length
    return COLORS[newIndex]
  })
  .case(Actions.nextColor, setNextColor)
  .case(Actions.autoNextColor, setNextColor) as Reducer<Color>

/**
 * Update state to go to the next color. If past the last color, go to the
 * beginning of the color list.
 * @param state Current color state
 * @param _action Unused dispatched action
 * @return Next color state
 */
function setNextColor(state: Color): Color {
  const oldIndex = COLORS.indexOf(state)
  const newIndex = (oldIndex + 1) % COLORS.length
  return COLORS[newIndex]
}
