import { put, takeLatest } from "redux-saga/effects";

import { actionTypes, loadDataFailure, loadDataSuccess } from "./actions";

import api from "./api";

function* loadDataSaga() {
  try {
    const data = yield api.getUserData();
    yield put(loadDataSuccess(data));
  } catch (err) {
    yield put(loadDataFailure(err));
  }
}

const sagas = [takeLatest(actionTypes.LOAD_DATA, loadDataSaga)];

export default sagas;
