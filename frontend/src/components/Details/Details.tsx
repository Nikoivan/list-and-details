import { useAppDispatch, useAppSelector } from '../../store/store';
import Preloader from '../Preloader/Preloader';
import { useEffect } from 'react';
import { detailsActions } from '../../store/redux/slices/detailsSlice';
import DetailsList from './List/Details-List';

export default function Details() {
  const { loading, data, error } = useAppSelector((state) => state.details);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!data.length) {
      dispatch(detailsActions.detailsRequest());
    }
  }, []);

  return (
    <>
      {loading && <Preloader />}
      {!!data.length && <DetailsList data={data} />}
      {error && <div>Some error - {error}</div>}
    </>
  );
}
