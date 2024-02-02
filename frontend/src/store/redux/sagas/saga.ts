import { spawn } from 'redux-saga/effects';
import watchRequestDetailsSaga from './watchRequestDetailsSaga';
import watchTargetRequestSaga from './watchTargetRequestSaga';

export default function* saga() {
  yield spawn(watchRequestDetailsSaga);
  yield spawn(watchTargetRequestSaga);
}
