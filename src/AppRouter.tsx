import React from 'react';
import { useRoutes } from 'react-router-dom';
import Loader from './components/atoms/loader';
import { IndexLayout } from './components/layouts';
import { ROUTES } from './config';

const AppRouter = () => {
  const Routes = useRoutes(ROUTES);
  return (
    <React.Suspense fallback={<Loader />}>
      <IndexLayout>{Routes}</IndexLayout>
    </React.Suspense>
  );
};

export default AppRouter;
