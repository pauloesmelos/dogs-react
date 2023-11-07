import React from 'react';
import { UserContext } from '../../global/UserContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { isLogin } = React.useContext(UserContext);
  return isLogin ? children : <Navigate to="/login" />
}

export default ProtectedRoute;