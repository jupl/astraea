/** Webpack hot module API */
interface HotModuleAPI {
  /** Accept code updates */
  accept: Function
}

/** Extend module for possible addition of Webpack's hot module replacement */
interface NodeModule {
  /** Webpack's hot module replacement */
  hot?: HotModuleAPI
}
