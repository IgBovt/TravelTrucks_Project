import TruckInfo from '../../components/TruckInfo/TruckInfo';
import TrucksGallery from '../../components/TrucksGallery/TrucksGallery';
import css from '../TruckPage/TruckPage.module.css';

export default function TruckPage() {
  return (
    <div className={css.container}>
      <TruckInfo />
      <TrucksGallery />
    </div>
  );
}
