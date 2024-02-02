import { take } from '@redux-saga/core/effects';
import { RequestTargetAction, targetActions } from '../slices/targetSlice';
import { call, put, retry } from 'redux-saga/effects';
import { DetailsItemProps } from '../../../components/Details/Item/Details-Item';
import detailsAPIRequest from '../../../services/detailsAPIRequest';

const filterTargetRequestSaga = ({ type, payload }: { type: string; payload?: string }) => {
  return type === targetActions.targetRequest.type && typeof payload === 'string' && payload.trim() !== '';
};

export function* handlerTargetReques(action: RequestTargetAction) {
  try {
    const data: DetailsItemProps = yield retry(3, 1000, detailsAPIRequest, action.payload);

    yield put(targetActions.targetSuccess(data));
  } catch {
    yield put(targetActions.targetFailure('Ошибка при запросе на сервер'));
  }
}

export default function* watchTargetRequestSaga() {
  while (true) {
    const action: RequestTargetAction = yield take(filterTargetRequestSaga);
    yield call(handlerTargetReques, action);
  }
}
