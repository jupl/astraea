// Patch to fix tsconfig-paths plugin
Object.assign(process.env, {TS_NODE_PROJECT: ''})

export {configuration as default} from './webpack.config.main'
