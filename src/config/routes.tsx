import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import Loadable from 'src/components/loadable';

import { PublicLayout, AppLayout } from 'src/components/layouts';

import { LOGIN, FORGET_PASSWORD, APP, DASHBOARD, AUTH } from './path';

const Login = Loadable(lazy(() => import('src/components/pages/Login')));
const Dashboard = Loadable(lazy(() => import('src/components/pages/Home')));
const NotFound = Loadable(lazy(() => import('src/components/pages/NotFound')));

const authRoutes: RouteObject = {
  path: AUTH,
  element: <PublicLayout />,
  children: [
    { index: true, element: <Login /> },
    { path: LOGIN, element: <Login /> },
    { path: FORGET_PASSWORD, element: <Login /> },
  ],
};
const notFoundRoutes: RouteObject = {
  path: '*',
  element: <NotFound />,
};

const appRoutes: RouteObject = {
  path: APP,
  element: <AppLayout />,
  children: [
    {
      path: DASHBOARD,
      element: <Dashboard />,
    },
    notFoundRoutes,
  ],
};

const routes: RouteObject[] = [
  { path: '/', element: <Navigate to={`${APP}/${DASHBOARD}`} /> },
  authRoutes,
  appRoutes,
  notFoundRoutes,
];

export default routes;
