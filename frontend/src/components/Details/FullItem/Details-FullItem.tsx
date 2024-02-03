import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { targetActions } from '../../../store/redux/slices/targetSlice';
import Preloader from '../../Preloader/Preloader';
import DetailsItem from '../Item/Details-Item';
import RequestFailure from '../../RequestFailure/RequestFailure';

export default function DetailsFullItem() {
  const { loading, data, error } = useAppSelector((state) => state.target);
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const sentRequest = () => {
    if (id) {
      dispatch(targetActions.targetRequest(id));
    }
  };

  useEffect(() => {
    if (!data && id) {
      sentRequest();
    }
  }, [id]);

  return (
    <>
      {loading && <Preloader />}
      {data && <DetailsItem {...data} />}
      {error && <RequestFailure errorText={error} clickHandler={sentRequest} />}
    </>
  );
}
