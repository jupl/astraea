import * as Provider from './provider'
import * as Template from './template'

/**
 * Inject context data into application
 * @return Wrapped component
 */
export const AppRoot = Provider.wrap(Template.AppRoot)
