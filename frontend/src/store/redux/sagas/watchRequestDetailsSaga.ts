import { call, put, retry, take } from 'redux-saga/effects';
import { detailsActions } from '../slices/detailsSlice';
import detailsAPIRequest from '../../../services/detailsAPIRequest';
import { DetailsItemProps } from '../../../components/Details/Item/Details-Item';

function filterRequestAction({ type }: any): boolean {
  return type === detailsActions.detailsRequest.type;
}

function* handlerRequestDetails() {
  try {
    const data: DetailsItemProps[] = yield retry(3, 1000, detailsAPIRequest);

    yield put(detailsActions.detailsSuccess(data));
  } catch {
    yield put(detailsActions.detailsFailure('Ошибка запроса'));
  }
}

export default function* watchRequestDetailsSaga() {
  while (true) {
    yield take(filterRequestAction);
    yield call(handlerRequestDetails);
  }
}
