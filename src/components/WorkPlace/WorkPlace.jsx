import TruckList from '../TruckList/TruckList';
import { getAllTrucks } from '../../redux/trucks/operations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllTrucks,
  selectCurrentPage,
  selectDisplayedTrucks,
  selectEmptyFilter,
  selectFilteredTrucks,
  selectItemsPerPage,
} from '../../redux/trucks/selectors';
import { loadMoreTrucks } from '../../redux/trucks/slice';
import css from '../WorkPlace/WorkPlace.module.css';

export default function WorkPlace() {
  const dispatch = useDispatch();
  const trucks = useSelector(selectAllTrucks);
  const filteredTrucks = useSelector(selectFilteredTrucks);
  const displayedTrucks = useSelector(selectDisplayedTrucks);
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);
  const emptyFilter = useSelector(selectEmptyFilter);
  const sourceTrucks = filteredTrucks.length > 0 ? filteredTrucks : trucks;

  useEffect(() => {
    dispatch(getAllTrucks());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(loadMoreTrucks());
  };

  return (
    <div className={css.container}>
      <TruckList trucks={displayedTrucks} />
      {emptyFilter ? (
        <p className={css.text}>
          Sorry, the positions you selected are unfortunately taken...
        </p>
      ) : (
        currentPage * itemsPerPage < sourceTrucks.length && (
          <button className={css.btn} onClick={handleLoadMore}>
            Load more
          </button>
        )
      )}
    </div>
  );
}
