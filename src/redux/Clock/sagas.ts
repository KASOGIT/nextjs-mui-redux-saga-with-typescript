import { call, put, take } from "redux-saga/effects";
import { delay } from "redux-saga";

import { actionTypes, tickClock } from "./actions";

function* runClockSaga() {
  yield take(actionTypes.START_CLOCK);
  while (true) {
    yield put(tickClock(false));
    yield call(delay, 1000);
  }
}

const sagas = [call(runClockSaga)];

export default sagas;
