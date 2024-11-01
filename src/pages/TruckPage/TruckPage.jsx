import TruckInfo from '../../components/TruckInfo/TruckInfo';
import css from '../TruckPage/TruckPage.module.css';

export default function TruckPage() {
  return (
    <div className={css.container}>
      <TruckInfo />
    </div>
  );
}
