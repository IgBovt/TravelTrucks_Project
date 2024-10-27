import TruckList from '../TruckList/TruckList';
import css from '../WorkPlace/WorkPlace.module.css';

export default function WorkPlace() {
  return (
    <div className={css.container}>
      <TruckList />
      <button className={css.btn}>Load more</button>
    </div>
  );
}
