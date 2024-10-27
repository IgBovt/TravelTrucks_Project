import TruckCard from '../TruckCard/TruckCard';
import { getTrucks } from '../../API/apiOperations.js';
import css from '../TruckList/TruckList.module.css';

export default function TruckList() {
  const arr = getTrucks();
  console.log(arr);

  return (
    <ul className={css.list}>
      <li>
        <TruckCard />
      </li>
      <li>
        <TruckCard />
      </li>
      <li>
        <TruckCard />
      </li>
      <li>
        <TruckCard />
      </li>
    </ul>
  );
}
