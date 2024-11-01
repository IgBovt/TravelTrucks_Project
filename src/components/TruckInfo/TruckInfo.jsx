import { selectTruck } from '../../redux/trucks/selectors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import css from '../TruckInfo/TruckInfo.module.css';
import Icon from '../../shared/Icon/Icon';
import { useEffect } from 'react';
import { getTruck } from '../../redux/trucks/operations';
import { useParams } from 'react-router';

export default function TruckInfo() {
  const dispatch = useDispatch();
  const id = useParams();
  const { name, rating, reviews, location, price } = useSelector(selectTruck);

  useEffect(() => {
    dispatch(getTruck(id.id));
  }, [dispatch, id]);

  return (
    <section className={css.titleContainer}>
      <h1 className={css.title}>{name}</h1>
      <div className={css.ratingContainer}>
        <div className={css.rating}>
          <Icon width="16" height="16" id="icon-Rating" />
          <p>
            {rating} ({reviews.length} Reviews)
          </p>
        </div>
        <div className={css.location}>
          <Icon width="16" height="16" id="icon-map" />
          <p>{location}</p>
        </div>
      </div>
      <p className={css.price}>€{price}.00</p>
    </section>
  );
}
