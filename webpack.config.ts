import createConfig from './.webpack'

// See .webpack/index.ts for how configuration is built
export default createConfig({
  source: 'src',
  destination: 'dist',
  assets: 'assets',
})
