import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from 'src/hooks/useAuth';

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  const { user } = auth;
  return <div>{user.email ? children : <Navigate to='/mambo' />}</div>;
};

export default PrivateRoute;