import { Home, UserPage, Error } from 'containers';

import { Routes, RoutesProps } from '../types';

const routes: RoutesProps[] = [
  { path: Routes.Home, component: <Home />, inLayout: true },
  { path: Routes.Error, component: <Error /> },
  { path: Routes.UserPage, component: <UserPage />, inLayout: true },
];

export default routes;
