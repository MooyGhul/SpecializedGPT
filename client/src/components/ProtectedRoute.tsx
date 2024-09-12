import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
  isLoggedIn: boolean;
  redirectPath?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isLoggedIn, redirectPath = "/login" }) => {
  return isLoggedIn ? <Outlet /> : <Navigate to={redirectPath} replace />;
};

export default ProtectedRoute;
