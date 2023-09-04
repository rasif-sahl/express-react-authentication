// ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function ProtectedRoute({ element: Element, token, ...rest }) {
  return (
    <Route
      {...rest}
      element={token ? <Element /> : <Navigate to="/login" replace />}
    />
  );
}

export default ProtectedRoute;
