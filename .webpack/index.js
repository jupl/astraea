const createConfig = require('./base')
const addAssets = require('./assets')
const addDevelopment = require('./development')
const addProduction = require('./production')
const addHot = require('./hot')

// Create base configuration and export
const config = module.exports = createConfig()

// Add to configuration based on environment
switch(process.env.NODE_ENV) {
case 'development':
case 'storybook':
  addDevelopment(config)
  console.info('--- webpack: using development configuration')
  break
case 'production':
  addProduction(config)
  console.info('--- webpack: using production configuration')
  break
default:
  throw new Error('NODE_ENV is not set or is an unsupported environment')
}

// Copy over assets except when running storybook
if(process.env.NODE_ENV !== 'storybook') {
  addAssets(config)
}

// Add hot reload support if explicitly specified
if(process.env.HOT_MODULES === 'true') {
  addHot(config)
  console.info('--- webpack: using hot modules configuration')
}
