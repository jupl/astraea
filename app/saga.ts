import {SagaIterator} from 'redux-saga'
import {all, call} from 'redux-saga/effects'
import * as color from '../color/saga'

type SagaStarter = () => SagaIterator

// Collection of all saga tasks to initiate
const sagas: SagaStarter[] = [color.saga]

/** Entry point to start running all initial saga tasks */
export function* saga(): SagaIterator {
  yield all(sagas.map(call))
}
