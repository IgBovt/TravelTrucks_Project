import { useSelector } from 'react-redux';
import css from '../Reviews/Reviews.module.css';
import { selectTruck } from '../../redux/trucks/selectors';
import { nanoid } from '@reduxjs/toolkit';

export default function Reviews() {
  const truck = useSelector(selectTruck);
  console.log(truck);

  return (
    truck && (
      <ul className={css.list}>
        {truck.reviews.map(item => {
          return (
            <li key={nanoid()}>
              <div className={css.container}>
                <div className={css.nameContainer}>
                  <div className={css.avatar}>
                    {item.reviewer_name.slice(0, 1)}
                  </div>
                  <div>
                    <div className={css.name}>{item.reviewer_name}</div>
                    <div>{item.reviewer_rating}</div>
                  </div>
                </div>
                <p className={css.text}>{item.comment}</p>
              </div>
            </li>
          );
        })}
      </ul>
    )
  );
}
