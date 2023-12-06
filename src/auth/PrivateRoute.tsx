// En un nuevo archivo PrivateRoute.tsx
import React from 'react';
import { Route, RouteProps, Routes, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

type PrivateRouteProps = {
  roles: string[];
} & RouteProps;

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ roles, element, ...rest }) => {
  // const { user, role } = useAuth();

  // if (!user || !roles.includes(role || '')) {
  //   // Redireccionar a la página de inicio de sesión si el usuario no está autenticado o no tiene el rol adecuado
  //   return <Navigate to="/login" />;
  // }

  return <Route {...rest} element={element} />;
};
