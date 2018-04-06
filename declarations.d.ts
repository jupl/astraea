// Add declarations here

interface Window {
  __REDUX_DEVTOOLS_EXTENSION__?: Function
}

// TODO Remove the following below once TS supports async iterator w/o esnext

interface SymbolConstructor {
  readonly asyncIterator: symbol
}

interface AsyncIterator<T> {
  next(value?: {}): Promise<IteratorResult<T>>
  return?(value?: {}): Promise<IteratorResult<T>>
  throw?(e?: {}): Promise<IteratorResult<T>>
}

interface AsyncIterable<T> {
  [Symbol.asyncIterator](): AsyncIterator<T>
}
