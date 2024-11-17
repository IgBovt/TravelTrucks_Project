import TruckList from '../TruckList/TruckList';
import { getAllTrucks } from '../../redux/trucks/operations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllTrucks,
  selectCurrentPage,
  selectDisplayedTrucks,
  selectItemsPerPage,
} from '../../redux/trucks/selectors';
import { loadMoreTrucks, resetTruck } from '../../redux/trucks/slice';
import css from '../WorkPlace/WorkPlace.module.css';

export default function WorkPlace() {
  const dispatch = useDispatch();
  const trucks = useSelector(selectAllTrucks);
  const displayedTrucks = useSelector(selectDisplayedTrucks);
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);

  useEffect(() => {
    dispatch(resetTruck());
    if (displayedTrucks.length === 0) {
      dispatch(getAllTrucks());
    }
  }, [dispatch, displayedTrucks]);

  const handleLoadMore = () => {
    dispatch(loadMoreTrucks());
  };

  return (
    <div className={css.container}>
      <TruckList trucks={displayedTrucks} />
      {currentPage * itemsPerPage < trucks.length && (
        <button className={css.btn} onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
}
