import {all, spawn} from 'redux-saga/effects'
import * as color from '../color/saga'

// Collection of all saga tasks to initiate
const sagas = [color.saga]

/** Entry point to start running all initial saga tasks */
export function* saga() {
  yield all(sagas.map(spawn))
}
