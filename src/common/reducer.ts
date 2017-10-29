import {Reducer, ReducersMapObject, combineReducers} from 'redux'
import {LocationState} from 'redux-first-router'

/** Structure of common state */
export interface State {
  location: LocationState
}

/** Required additional reducers */
export interface ExtraReducers extends ReducersMapObject {
  location: Reducer<LocationState>
}

/**
 * Create a reducer creator for potential additional reducer key/value pairs
 * @param reducers Reducers map
 * @return Reducer creator
 */
export function createReducerCreator<S>(reducers: ReducersMapObject) {
  return function createReducer(extraReducers: ExtraReducers) {
    return combineReducers<S>({...reducers, ...extraReducers})
  }
}
