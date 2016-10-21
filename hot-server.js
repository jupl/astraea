// Create a new server instance
const {Server} = require('hapi')
const server = new Server()

// Set up server port number with a default
const port = parseInt(process.env.PORT, 10) || 3000
server.connection({port})

// Add webpack plugin so server knows to get static assets from builds
const webpack = require('webpack')
const config = require('./webpack.config')
const webpackPlugin = {
  register: require('hapi-webpack-plugin'),
  options: {
    compiler: webpack(config),
    assets: {noInfo: true, publicPath: config.output.publicPath},
  },
}
server.register(webpackPlugin, error => { if(error) { throw error } })

// Start server and notify
server.start(() => console.log(`Server running at: ${server.info.uri}`))
