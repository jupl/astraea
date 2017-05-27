import {SagaIterator, delay} from 'redux-saga'
import {call, put, race, take} from 'redux-saga/effects'
import {autoNextColor, nextColor, previousColor} from './actions'

// Amount of time to wait before auto changing colors
const AUTO_TIMEOUT = 4000

/**
 * Start process to cycle colors automatically until an action is emitted to
 * manually change color
 */
export function* saga(): SagaIterator {
  for( ; ; ) {
    const {end} = yield race({
      timeout: call(delay, AUTO_TIMEOUT),
      end: take([`${previousColor}`, `${nextColor}`]),
    })
    if(end != undefined) { break }
    yield put(autoNextColor())
  }
}
