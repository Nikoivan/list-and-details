import { useAppDispatch, useAppSelector } from '../../store/store';
import Preloader from '../Preloader/Preloader';
import { useEffect } from 'react';
import { detailsActions } from '../../store/redux/slices/detailsSlice';
import DetailsList from './List/Details-List';
import RequestFailure from '../RequestFailure/RequestFailure';

export default function Details() {
  const { loading, data, error } = useAppSelector((state) => state.details);
  const dispatch = useAppDispatch();

  const sendRequest = () => {
    dispatch(detailsActions.detailsRequest());
  };

  useEffect(() => {
    if (!data.length) {
      sendRequest();
    }
  }, []);

  return (
    <>
      {loading && <Preloader />}
      {!!data.length && <DetailsList data={data} />}
      {error && <RequestFailure errorText={error} clickHandler={sendRequest} />}
    </>
  );
}
