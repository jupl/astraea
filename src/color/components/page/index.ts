import {withContext} from '../../../common/util'
import {Context} from '../../context'
import * as Template from './template'

/** Inject context data into component */
export const ColorPage = withContext(Context)(Template.ColorPage)
