import { FC, FormEvent } from 'react';
import './RequestFailure.css';

type RequestFailureProps = {
  errorText?: string;
  clickHandler(): void;
};

const RequestFailure: FC<RequestFailureProps> = ({ errorText, clickHandler }) => (
  <div className='RequestFailure'>
    <span className='RequestFailure-ErrorText'>{errorText || 'Произошла ошибка!'}</span>
    <button
      className='RequestFailure-ActionButton'
      onClick={(e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        clickHandler();
      }}
    >
      Повторить запрос
    </button>
  </div>
);

export default RequestFailure;
