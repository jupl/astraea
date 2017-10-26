// Reference our Webpack config for Storybook
require('ts-node/register')
module.exports = require('../webpack.config').default[0]
