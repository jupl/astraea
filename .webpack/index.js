const createConfig = require('./base')
const addAssets = require('./assets')
const addDevelopment = require('./development')
const addProduction = require('./production')
const addHot = require('./hot')
const addStory = require('./story')

/**
 * @typedef {Object} IndexOptions
 * @property {string} assets Assets path to read static assets from
 * @property {string} source Source path to read source code from
 * @property {string} destination Destination path to write assets out
 */

/**
 * Build Webpack configuration
 * @param {IndexOptions} options Options
 * @return {Object} Webpack configuration
 */
module.exports = ({source, destination, assets}) => {
  // Create base configuration and export
  const config = createConfig({source, destination})

  // Add to configuration based on environment
  switch(process.env.NODE_ENV) {
  case 'storybook':
    addStory(config)
    addDevelopment(config)
    console.info('--- webpack: using storybook configuration')
    break
  case 'development':
    addAssets(config, {assets})
    addDevelopment(config)
    console.info('--- webpack: using development configuration')
    break
  case 'production':
    addAssets(config, {assets})
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

  return config
}
