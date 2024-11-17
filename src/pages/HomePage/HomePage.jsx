import css from '../HomePage/HomePage.module.css';
import LinkButton from '../../shared/LinkButton/LinkButton';
import { resetDisplayedTrucks } from '../../redux/trucks/slice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetDisplayedTrucks());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.header}>Campers of your dreams</h1>
      <p className={css.text}>
        You can find everything you want in our catalog
      </p>
      <LinkButton route="/catalog" text="View Now" width={173} />
    </div>
  );
}
