import { call, takeEvery, put } from "redux-saga/effects";
import { ADRESSES_REQUEST, ERROR_SAGA } from "./Actions";
import { createPoints, editPointsFrom, editPointsTo } from "../reducers/adressesSlice";

export default function* fetchSagaWatcher() {
  yield takeEvery(ADRESSES_REQUEST, fetchSagaWorker);
}

export function* fetchSagaWorker() {
  try {
    const payload = yield call(fetchApi);
    yield put(createPoints(payload));
    yield put(editPointsFrom(payload));
    yield put(editPointsTo(payload));
  } catch (e) {
    yield put({ type: ERROR_SAGA, payload: { message: e.massage } });
  }
}

async function fetchApi() {
  const response = await fetch("");
  return await response.json();
}
