const createConfig = require('./base')
const addAssets = require('./assets')
const addDevelopment = require('./development')
const addProduction = require('./production')
const addHot = require('./hot')
const addStory = require('./story')

/**
 * Build Webpack configuration
 * @param {Object} options - Options
 * @param {string} options.source - Source path to read source code from
 * @param {string} options.destination - Destination path to write assets out
 * @param {string} options.assets - Assets path to read static assets from
 * @return {Object} Webpack configuration
 */
module.exports = ({
  source,
  destination,
  assets,
}) => {
  // Create base configuration and export
  const config = createConfig({source, destination})

  // Add to configuration based on environment
  switch(process.env.NODE_ENV) {
  case 'storybook':
    addStory(config)
    addDevelopment(config)
    console.info('--- webpack: using storybook configuration')
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
