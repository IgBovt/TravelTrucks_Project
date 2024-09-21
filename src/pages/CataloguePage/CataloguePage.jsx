import Sidebar from '../../components/Sidebar/Sidebar';
import WorkPlace from '../../components/WorkPlace/WorkPlace';
import css from '../CataloguePage/CataloguePage.module.css';

export default function CataloguePage() {
  return (
    <div className={css.container}>
      <Sidebar />
      <WorkPlace />
    </div>
  );
}
