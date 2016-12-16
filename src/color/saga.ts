import {delay, SagaIterator} from 'redux-saga'
import {call, put, race, take} from 'redux-saga/effects'
import {previousColor, nextColor, autoNextColor} from './actions'

// Amount of time to wait before auto changing colors
const AUTO_TIMEOUT = 4000

/**
 * Start process to cycle colors automatically until an action is emitted to
 * manually change color
 */
export default function* saga(): SagaIterator {
  for(;;) {
    const {end} = yield race({
      timeout: call(delay, AUTO_TIMEOUT),
      end: take([`${previousColor}`, `${nextColor}`]),
    })
    if(end) { break }
    yield put(autoNextColor())
  }
}
