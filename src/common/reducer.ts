import {ReducersMapObject, combineReducers} from 'redux'

/**
 * Create a reducer creator for potential additional reducer key/value pairs
 * @param reducers Reducers map
 * @return Reducer creator
 */
export function createReducerCreator<S>(reducers: ReducersMapObject) {
  return function createReducer(extraReducers: ReducersMapObject = {}) {
    return combineReducers<S>({...reducers, ...extraReducers})
  }
}
