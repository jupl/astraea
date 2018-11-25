import {Context} from '../../context'
import {withContext} from '../../util'
import * as Template from './template'

/** Inject context data into component */
export const ColorPage = withContext(Context)(Template.ColorPage)
