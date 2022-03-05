import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} exact />
      ))}
    </Routes>
  );
};

export default AppRouter;
