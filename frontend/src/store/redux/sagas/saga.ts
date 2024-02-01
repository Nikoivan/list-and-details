import { spawn } from 'redux-saga/effects';
import watchRequestDetailsSaga from './watchRequestSaga';

export default function* saga() {
  yield spawn(watchRequestDetailsSaga);
}
