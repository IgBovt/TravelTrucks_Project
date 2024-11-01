import { useSelector } from 'react-redux';
import { selectTruck } from '../../redux/trucks/selectors';
import css from '../TrucksGallery/TrucksGallery.module.css';
import { nanoid } from '@reduxjs/toolkit';

export default function TrucksGallery() {
  const truck = useSelector(selectTruck);
  console.log(truck);

  return (
    truck && (
      <section>
        <ul className={css.list}>
          {truck.gallery.map(img => (
            <li className={css.item} key={nanoid()}>
              <img className={css.image} src={img.thumb} alt="Truck image" />
            </li>
          ))}
        </ul>
        <p className={css.text}>{truck.description}</p>
      </section>
    )
  );
}
