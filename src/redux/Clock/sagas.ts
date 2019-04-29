import { call, put, take, delay } from "redux-saga/effects";

import { actionTypes, tickClock } from "./actions";

function* runClockSaga() {
  yield take(actionTypes.START_CLOCK);
  while (true) {
    yield put(tickClock(false));
    yield delay(1000);
  }
}

const sagas = [call(runClockSaga)];

export default sagas;
