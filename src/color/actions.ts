import {createAction} from 'redux-actions'

/** Create action that to move to the next color */
export const previousColor = createAction('COLORS_PREVIOUS_COLOR')

/** Create action that to move to the previous color */
export const nextColor = createAction('COLORS_NEXT_COLOR')

/** Create action that to move to the next color automatically */
export const autoNextColor = createAction('COLORS_AUTO_NEXT_COLOR')
