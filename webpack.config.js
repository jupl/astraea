const createConfig = require('./.webpack')

// See .webpack/index.js for how configuration is built
module.exports = createConfig({
  source: 'src',
  destination: 'dist',
  assets: 'assets',
})
