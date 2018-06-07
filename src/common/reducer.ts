import {Reducer, ReducersMapObject, combineReducers} from 'redux'

/** Structure of common state */
// tslint:disable-next-line:no-empty-interface
export interface State {}

/**
 * Create a reducer creator for potential additional reducer key/value pairs
 * @param reducers Reducers map
 * @return Reducer creator
 */
export function createReducerCreator<S>(
  reducers: Partial<ReducersMapObject<S>>,
) {
  return function createReducer(
    extraReducers: Partial<ReducersMapObject<S>> = {},
  ) {
    // tslint:disable-next-line:prefer-object-spread
    return combineReducers<S>(Object.assign(
      {},
      reducers as ReducersMapObject<S>,
      extraReducers as ReducersMapObject<S>,
    )) as Reducer<S & State> // tslint:disable-line:no-useless-intersection
  }
}
