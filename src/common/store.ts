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
import createSagaMiddleware, {SagaIterator} from 'redux-saga'

type Saga = () => SagaIterator

// Check if Redux DevTools is available for redux-logger
const devToolsAvailable = window.__REDUX_DEVTOOLS_EXTENSION__ !== undefined

/** Store constructor options */
interface Options<S> extends Readonly<EnhancerOptions> {
  /** Redux reducer */
  readonly reducer: Reducer<S>
  /** Intial store state */
  readonly initialState?: S
  /** Optional middlewares */
  readonly middlewares?: Middleware[]
  /** Optional saga */
  readonly saga?: Saga
}

/**
 * Create a Redux store complete with potential development settings and saga
 * @param options Options to construct store with as well
 * @return Redux store instance
 */
export function createStore<S>({
  reducer,
  initialState,
  middlewares = [],
  saga,
  ...config,
}: Options<S>) {
  // Create saga middleware if saga is provided
  let sagaMiddleware
  if(saga !== undefined) {
    sagaMiddleware = createSagaMiddleware()
    middlewares = [...middlewares, sagaMiddleware]
  }

  // Add redux-logger middleware in development when there's no Redux DevTools
  if(process.env.NODE_ENV !== 'production' && !devToolsAvailable) {
    const logger = require('redux-logger')
    middlewares = [...middlewares, logger.default]
  }

  // Create enhancer
  const enhancer = composeWithDevTools(config)(applyMiddleware(...middlewares))

  // Create store instance
  const store = createReduxStore<S>(reducer, initialState!, enhancer)

  // Start running saga
  if(sagaMiddleware !== undefined && saga !== undefined) {
    sagaMiddleware.run(saga)
  }

  return store
}
