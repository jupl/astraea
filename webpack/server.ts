import {App, Plugins, bootstrap} from 'hapiour-decorators'
import {Server} from '../common/server'
import {WebpackPlugin} from './plugins/webpack'

const RADIX = 10
const DEFAULT_PORT = 3000
let port = parseInt(process.env.PORT, RADIX)
if(isNaN(port)) {
  port = DEFAULT_PORT
}

/** Development server that serves up Webpack assets */
@App({port})
@Plugins([WebpackPlugin])
export class WebpackServer extends Server {}

// tslint:disable-next-line no-null-keyword
if(module.parent === null) {
  bootstrap(WebpackServer)
}
