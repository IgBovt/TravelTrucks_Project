import { Route, Routes } from 'react-router';
import { Suspense, useEffect } from 'react';
import { lazy } from 'react';
import Layout from '../Layout/Layout';
import { useDispatch } from 'react-redux';
import { getTrucks } from '../../redux/trucks/operations';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const CataloguePage = lazy(() =>
  import('../../pages/CataloguePage/CataloguePage')
);
const TruckPage = lazy(() => import('../../pages/TruckPage/TruckPage'));
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage')
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrucks());
  }, [dispatch]);

  return (
    <Layout>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CataloguePage />} />
          <Route path="/catalog/:id" element={<TruckPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
