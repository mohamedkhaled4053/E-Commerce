import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ children }) => {
  let { isAuthenticated } = useAuth0();
  if (isAuthenticated) return children;
  return <Navigate to="/" />;
};
export default PrivateRoute;
