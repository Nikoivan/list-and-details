import { call, put, retry, take } from 'redux-saga/effects';
import { RequesDetailsAction, detailsActions } from '../slices/detailsSlice';
import detailsAPIRequest from '../../../services/detailsAPIRequest';

function filterRequestAction({ type, payload }: any): boolean {
  return type === detailsActions.detailsRequest.type && typeof payload === 'string' && payload.trim() !== '';
}

function* handlerRequestDetails(action: RequesDetailsAction) {
  try {
    const data: string[] = yield retry(3, 1000, detailsAPIRequest, action.payload);

    yield put(detailsActions.detailsSuccess(data));
  } catch {
    yield put(detailsActions.detailsFailure('Ошибка запроса'));
  }
}

export default function* watchRequestDetailsSaga() {
  while (true) {
    const action: RequesDetailsAction = yield take(filterRequestAction);
    yield call(handlerRequestDetails, action);
  }
}
