import TruckCard from '../TruckCard/TruckCard';
import css from '../TruckList/TruckList.module.css';
import { selectAllTrucks } from '../../redux/trucks/selectors';
import { useSelector } from 'react-redux';

export default function TruckList() {
  const trucks = useSelector(selectAllTrucks);
  console.log(trucks);

  return (
    <ul className={css.list}>
      {trucks.map(({ name }) => {
        <li>
          <TruckCard name={name} />
        </li>;
      })}
    </ul>
  );
}
