// Patch to fix tsconfig-paths plugin
// tslint:disable-next-line:no-object-mutation
Object.assign(process.env, {TS_NODE_PROJECT: ''})

export {configuration as default} from './webpack.config.main'
