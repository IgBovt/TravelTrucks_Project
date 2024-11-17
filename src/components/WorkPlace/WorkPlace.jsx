import TruckList from '../TruckList/TruckList';
import { getAllTrucks } from '../../redux/trucks/operations';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllTrucks } from '../../redux/trucks/selectors';
import { resetTruck } from '../../redux/trucks/slice';

import css from '../WorkPlace/WorkPlace.module.css';

export default function WorkPlace() {
  const dispatch = useDispatch();
  const trucks = useSelector(selectAllTrucks);
  const [displayedTrucks, setDisplayedTrucks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    dispatch(resetTruck());
    dispatch(getAllTrucks());
  }, [dispatch]);

  useEffect(() => {
    if (trucks.length > 0 && displayedTrucks.length === 0) {
      setDisplayedTrucks(trucks.slice(0, itemsPerPage));
    }
  }, [trucks, itemsPerPage, displayedTrucks.length]);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    const newItems = trucks.slice(
      currentPage * itemsPerPage,
      nextPage * itemsPerPage
    );
    setDisplayedTrucks(prevTrucks => [...prevTrucks, ...newItems]);
    setCurrentPage(nextPage);
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
