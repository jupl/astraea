import {Server} from 'hapi'
import * as webpack from 'webpack'
import config from './webpack.config'

// Create a new server instance
const server = new Server()

// Set up server port number with a default
const RADIX = 10
const DEFAULT_PORT = 3000
const port = parseInt(process.env.PORT, RADIX) || DEFAULT_PORT
server.connection({port})

// Add webpack plugin so server knows to get static assets from builds
server.register({
  register: require('hapi-webpack-plugin'),
  options: {
    compiler: webpack(config),
    assets: {
      noInfo: true,
      publicPath: config.output && config.output.publicPath,
    },
  },
}, error => { if(error) { throw error } })

// Start server and notify
server.start(() => { console.log(`Server running at: ${server.info.uri}`) })
