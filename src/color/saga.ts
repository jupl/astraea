import {delay, SagaIterator} from 'redux-saga'
import {call, put, race, take} from 'redux-saga/effects'
import {previousColor, nextColor, autoNextColor} from './actions'

/**
 * Start process to cycle colors automatically until an action is emitted to
 * manually change color
 */
export default function* saga(): SagaIterator {
  for(;;) {
    const {end} = yield race({
      timeout: call(delay, 4000),
      end: take([`${previousColor}`, `${nextColor}`]),
    })
    if(end) { break }
    yield put(autoNextColor())
  }
}
