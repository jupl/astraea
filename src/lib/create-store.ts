import {applyMiddleware, createStore, Reducer, Store} from 'redux'
import createSagaMiddleware, {SagaIterator, SagaMiddleware} from 'redux-saga'
const reduxDevTools = require('redux-devtools-extension/developmentOnly')
const {composeWithDevTools} = reduxDevTools

// Check if Redux DevTools is available for redux-logger
interface WindowWithDevTools extends Window {
  __REDUX_DEVTOOLS_EXTENSION__?: Function
}
const {__REDUX_DEVTOOLS_EXTENSION__} = window as WindowWithDevTools
const devToolsAvailable = !!__REDUX_DEVTOOLS_EXTENSION__

/** Store constructor options */
interface Options<S> {
  /** Redux reducer */
  reducer: Reducer<S>

  /** Optional saga */
  saga?: () => SagaIterator

  /** Intial store state */
  initialState?: S

  /** Additional options for Redux Devtools */
  [name: string]: string | number | boolean | Function | S | undefined
}

/**
 * Create a Redux store complete with potential development settings and saga
 * @param options Options to construct store with as well
 * @return Redux store instance
 */
export default function newStore<S>(options: Options<S>): Store<S> {
  const {reducer, saga, initialState} = options
  let middlewares: SagaMiddleware[] = []

  // Create saga middleware if saga is provided
  let sagaMiddleware: SagaMiddleware | undefined
  if(saga) {
    sagaMiddleware = createSagaMiddleware()
    middlewares = [...middlewares, sagaMiddleware]
  }

  // Add redux-logger middleware in development when there's no Redux DevTools
  if(process.env.NODE_ENV !== 'production' && devToolsAvailable) {
    const createLogger = require('redux-logger')
    middlewares = [...middlewares, createLogger()]
  }

  // Create enhancer
  const config = Object.assign({}, options)
  delete options.reducer
  delete options.saga
  delete options.initialState
  const enhancer = composeWithDevTools(config)(applyMiddleware(...middlewares))

  // Create store instance
  const store = createStore(reducer, initialState, enhancer)

  // Start running saga
  if(sagaMiddleware && saga) {
    sagaMiddleware.run(saga)
  }

  // Typecast as initialState may not be defined
  return store as Store<S>
}
