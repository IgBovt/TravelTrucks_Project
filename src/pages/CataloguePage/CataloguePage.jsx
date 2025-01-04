import { useEffect } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import WorkPlace from '../../components/WorkPlace/WorkPlace';
import css from '../CataloguePage/CataloguePage.module.css';
import { useDispatch } from 'react-redux';
import { resetTruck } from '../../redux/trucks/slice';

export default function CataloguePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetTruck());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <Sidebar />
      <WorkPlace />
    </div>
  );
}
