import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import CreateSecretPage from '../pages/create/CreateSecretPage';
import ViewSecretPage from '../pages/view/ViewSecretPage';
import { URLS } from '../utils/constants';
import NotFound from '../pages/notFound/NotFound';

const Public = () => {
  return (
    <Routes>
      <Route
        path={URLS.CREATE_SECRET}
        element={
          <MainLayout>
            <CreateSecretPage />
          </MainLayout>
        }
      />
      <Route
        path={URLS.SELECTED_SECRET}
        element={
          <MainLayout>
            <ViewSecretPage />
          </MainLayout>
        }
      />
      <Route
        path={URLS.NOT_FOUND}
        element={
          <MainLayout>
            <NotFound />
          </MainLayout>
        }
      />
      <Route path="*" element={<Navigate to={URLS.CREATE_SECRET} />} />
    </Routes>
  );
};

export default Public;
