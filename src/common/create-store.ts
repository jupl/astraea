import {applyMiddleware, createStore, Reducer, Store} from 'redux'
import createSagaMiddleware, {SagaIterator, SagaMiddleware} from 'redux-saga'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'

type Saga = () => SagaIterator

// Check if Redux DevTools is available for redux-logger
const devToolsAvailable = !!window.__REDUX_DEVTOOLS_EXTENSION__

/** Store constructor options */
interface Options<S> {
  /** Redux reducer */
  readonly reducer: Reducer<S>

  /** Optional saga */
  readonly saga?: Saga

  /** Intial store state */
  readonly initialState?: S

  /** Additional options for Redux Devtools */
  readonly [name: string]: string | number | boolean | Function | S | undefined
}

/**
 * Create a Redux store complete with potential development settings and saga
 * @param options Options to construct store with as well
 * @return Redux store instance
 */
export default function newStore<S>(options: Options<S>): Store<S> {
  const {reducer, saga, initialState, ...config} = options
  let middlewares: SagaMiddleware[] = []

  // Create saga middleware if saga is provided
  const sagaMiddleware = saga && createSagaMiddleware()
  middlewares = sagaMiddleware ? [...middlewares, sagaMiddleware] : middlewares

  // Add redux-logger middleware in development when there's no Redux DevTools
  if(process.env.NODE_ENV !== 'production' && !devToolsAvailable) {
    const createLogger = require('redux-logger')
    middlewares = [...middlewares, createLogger()]
  }

  // Create enhancer
  const enhancer = composeWithDevTools(config)(applyMiddleware(...middlewares))

  // Create store instance
  const store = createStore(reducer, initialState!, enhancer)

  // Start running saga
  if(sagaMiddleware && saga) {
    sagaMiddleware.run(saga)
  }

  return store
}
