import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import './Details-Item.css';

export type DetailsItemProps = {
  id: number;
  name: string;
  price: number;
};

const DetailsItem = ({ id, name, price }: DetailsItemProps) => {
  const navigate = useNavigate();

  const onClickHadler = useCallback(() => {
    navigate(`/${id}/details`);
  }, []);

  return (
    <div className='Details-Item' onClick={onClickHadler}>
      <div className='Item-Tittle'>{name}</div>
      <div className='Item-Price'>{price} рублей</div>
    </div>
  );
};

export default DetailsItem;
