import { selectAllTrucks } from '../../redux/trucks/selectors';
import { useSelector } from 'react-redux';
import css from '../TruckInfo/TruckInfo.module.css';
import Icon from '../../shared/Icon/Icon';

export default function TruckInfo() {
  return (
    <section>
      <div className={css.titleContainer}>
        <h1 className={css.title}>Title</h1>
        <div className={css.ratingContainer}>
          <div className={css.rating}>
            <Icon
              className={css.icon}
              width="16"
              height="16"
              id="icon-Rating"
            />
            <p>9292929</p>
          </div>
          <div className={css.location}>
            <Icon className={css.icon} width="16" height="16" id="icon-map" />
            <p>ekejkeke</p>
          </div>
        </div>
        <p className={css.price}></p>
      </div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <p>text</p>
    </section>
  );
}
