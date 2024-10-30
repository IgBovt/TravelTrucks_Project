import TruckCard from '../TruckCard/TruckCard';
import css from '../TruckList/TruckList.module.css';

export default function TruckList() {
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
