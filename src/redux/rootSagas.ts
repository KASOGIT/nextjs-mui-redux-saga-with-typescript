import { all } from "redux-saga/effects";

import clockSagas from "./Clock/sagas";
import userDataSagas from "./userData/sagas";

function* rootSaga() {
  yield all([...clockSagas, ...userDataSagas]);
}

export default rootSaga;
