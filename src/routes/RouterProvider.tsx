import { BrowserRouter, Route, Routes as RouterRoutes } from 'react-router-dom';

import { Layout } from 'components';

import { RoutesProps } from '../types';

import routes from './routes';

const RouterProvider = () => {
  const renderRoutes = routes.map(({ path, component, inLayout }: RoutesProps) => {
    return (
      <Route key={path} path={path} element={<Layout inLayout={inLayout}>{component}</Layout>} />
    );
  });

  return (
    <BrowserRouter>
      <RouterRoutes>{renderRoutes}</RouterRoutes>
    </BrowserRouter>
  );
};

export default RouterProvider;
