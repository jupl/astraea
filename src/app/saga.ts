import {SagaIterator} from 'redux-saga'
import {all, spawn} from 'redux-saga/effects'

type SagaStarter = () => SagaIterator

// Collection of all saga tasks to initiate
const sagas: SagaStarter[] = [] // Add domain saga entry points here

/** Entry point to start running all initial saga tasks */
export function* saga(): SagaIterator {
  yield all(sagas.map(spawn))
}
