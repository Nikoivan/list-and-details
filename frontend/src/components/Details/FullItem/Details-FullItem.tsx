import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { targetActions } from '../../../store/redux/slices/targetSlice';
import Preloader from '../../Preloader/Preloader';
import DetailsItem from '../Item/Details-Item';

export default function DetailsFullItem() {
  const { loading, data, error } = useAppSelector((state) => state.target);
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (!data && id) {
      dispatch(targetActions.targetRequest(id));
    }
  });

  return (
    <>
      {loading && <Preloader />}
      {data && <DetailsItem {...data} />}
      {error && <div>Something is wrong - {error}</div>}
    </>
  );
}
