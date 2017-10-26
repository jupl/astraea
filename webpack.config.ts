import * as client from './src/webpack/config/client'
import * as server from './src/webpack/config/server'

// tslint:disable-next-line:no-default-export
export default [client.configuration, server.configuration]
