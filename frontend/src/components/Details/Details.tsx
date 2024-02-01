import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../store/store';
import Preloader from '../Preloader/Preloader';
import { useEffect } from 'react';
import { detailsActions } from '../../store/redux/slices/detailsSlice';

export default function Details() {
  const { loading, data, error } = useAppSelector((state) => state.details);
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(detailsActions.detailsRequest(id));
    } else {
      dispatch(detailsActions.detailsFailure('Некоректный параметр строки'));
    }
  }, []);

  return (
    <>
      {loading && <Preloader />}
      {!!data.length && <div>data</div>}
      {error && <div>Some error - {error}</div>}
    </>
  );
}
