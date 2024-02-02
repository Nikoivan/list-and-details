import { memo } from 'react';
import DetailsItem, { DetailsItemProps } from '../Item/Details-Item';
import './Details-List.css';

type DetailsListProps = {
  data: DetailsItemProps[];
};

const DetailsList = memo(({ data }: DetailsListProps) => (
  <ul className='Details-List'>
    {data.map((item) => (
      <DetailsItem key={item.id} {...item} />
    ))}
  </ul>
));

export default DetailsList;
