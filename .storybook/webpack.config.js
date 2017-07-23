// Reference our Webpack config for Storybook
require('ts-node/register')
module.exports = require('../src/webpack/config/client').configuration
