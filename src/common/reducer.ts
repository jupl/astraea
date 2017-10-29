import {Reducer, ReducersMapObject, combineReducers} from 'redux'
import {LocationState} from 'redux-first-router'

interface Location extends LocationState {
  payload: {
    [key: string]: any // tslint:disable-line:no-any
  }
}

/** Structure of common state */
export interface State {
  location: Location
}

/** Required additional reducers */
export interface ExtraReducers extends ReducersMapObject {
  location: Reducer<Location>
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
