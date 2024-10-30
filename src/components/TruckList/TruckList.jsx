import TruckCard from '../TruckCard/TruckCard';
import css from '../TruckList/TruckList.module.css';
import { selectAllTrucks } from '../../redux/trucks/selectors';
import { useSelector } from 'react-redux';

export default function TruckList() {
  const trucks = useSelector(selectAllTrucks);
  console.log(trucks);

  return (
    <ul className={css.list}>
      {trucks.map(
        ({
          id,
          name,
          price,
          description,
          gallery,
          location,
          rating,
          reviews,
        }) => {
          return (
            <li key={id}>
              <TruckCard
                name={name}
                price={price}
                description={description}
                gallery={gallery[0].thumb}
                location={location}
                rating={rating}
                reviews={reviews.length}
              />
            </li>
          );
        }
      )}
    </ul>
  );
}
