import {
  Middleware,
  Reducer,
  applyMiddleware,
  createStore as createReduxStore,
} from 'redux'
import {
  EnhancerOptions,
  composeWithDevTools,
} from 'redux-devtools-extension/logOnlyInProduction'

// Check if Redux DevTools is available for redux-logger
const devToolsAvailable = window.__REDUX_DEVTOOLS_EXTENSION__ !== undefined

/** Store constructor options */
interface Options<S> extends EnhancerOptions {
  /** Redux reducer */
  reducer: Reducer<S>
  /** Additional enhancers */
  enhancers?: Function[]
  /** Intial store state */
  initialState?: S
  /** Optional middlewares */
  middlewares?: Middleware[]
}

/**
 * Create a Redux store complete with potential development settings
 * @param options Options to construct store with as well
 * @return Redux store instance
 */
export function createStore<S>({
  enhancers = [],
  reducer,
  initialState,
  middlewares: baseMiddlewares = [],
  ...config,
}: Options<S>) {
  let middlewares = baseMiddlewares

  // Add redux-logger middleware in development when there's no Redux DevTools
  if(process.env.NODE_ENV !== 'production' && !devToolsAvailable) {
    const logger = require('redux-logger')
    middlewares = [...middlewares, logger.default]
  }

  // Create store instance
  return createReduxStore<S>(
    reducer,
    initialState!,
    composeWithDevTools(config)(...enhancers, applyMiddleware(...middlewares)),
  )
}
