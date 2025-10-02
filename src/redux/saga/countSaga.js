import { put, takeEvery } from "redux-saga/effects";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));
function* incrementWorker() {
  yield delay(1000);
  yield put({ type: "counter/increment" });
}
function* decrementWorker() {
  yield delay(1000);
  yield put({ type: "counter/decrement" });
}
export function* countWatcher() {
  yield takeEvery(`async_increment`, incrementWorker);
  yield takeEvery(`async_decrement`, decrementWorker);
}
