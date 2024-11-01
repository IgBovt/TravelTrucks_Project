import TruckCard from '../TruckCard/TruckCard';
import css from '../TruckList/TruckList.module.css';
import { selectAllTrucks } from '../../redux/trucks/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { resetTruck } from '../../redux/trucks/slice';

export default function TruckList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetTruck());
  }, [dispatch]);

  const trucks = useSelector(selectAllTrucks);

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
          transmission,
          engine,
          kitchen,
          AC,
          water,
          TV,
          bathroom,
          gas,
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
                transmission={transmission}
                engine={engine}
                kitchen={kitchen}
                AC={AC}
                water={water}
                TV={TV}
                bathroom={bathroom}
                gas={gas}
                id={id}
              />
            </li>
          );
        }
      )}
    </ul>
  );
}
