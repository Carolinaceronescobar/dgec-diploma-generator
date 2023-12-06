// src/Routes.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Form/LoginPage';
import { PrivateRoute } from './auth/PrivateRoute';
import MyComponent from './App.tsx';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <PrivateRoute path="/form" roles={['role1','role2']} element={<MyComponent/>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;