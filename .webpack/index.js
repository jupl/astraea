const createConfig = require('./base')
const addAssets = require('./assets')
const addDevelopment = require('./development')
const addProduction = require('./production')
const addHot = require('./hot')
const addStory = require('./story')

// Create base configuration and export
const config = module.exports = createConfig()

// Add to configuration based on environment
switch(process.env.NODE_ENV) {
case 'storybook':
  addStory(config)
  addDevelopment(config)
  console.info('--- webpack: using storybook configuration')
case 'development':
  addAssets(config)
  addDevelopment(config)
  console.info('--- webpack: using development configuration')
  break
case 'production':
  addAssets(config)
  addProduction(config)
  console.info('--- webpack: using production configuration')
  break
default:
  throw new Error('NODE_ENV is not set or is an unsupported environment')
}

// Add hot reload support if explicitly specified
if(process.env.HOT_MODULES === 'true') {
  addHot(config)
  console.info('--- webpack: using hot modules configuration')
}
