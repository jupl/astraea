import {buildActionCreator} from 'hard-reducer'

const {createAction} = buildActionCreator({prefix: 'Color.'})

/** Create action that to move to the next color */
export const previousColor = createAction('previousColor')

/** Create action that to move to the previous color */
export const nextColor = createAction('nextColor')

/** Create action that to move to the next color automatically */
export const autoNextColor = createAction('autoNextColor')
