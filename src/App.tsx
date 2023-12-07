// App.tsx
import React from 'react';
import TopBar from './components/TopBar';
import HorizontalLinearStepper from './components/HorizontalLinearStepper';
import Footer from './components/Footer'; // Importa el componente Footer
import './App.css'; // Ruta correcta al archivo de estilo CSS
// import AppRoutes from './Routes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import LoginPage from './components/Form/LoginPage';
import { PrivateRoute } from './auth/PrivateRoute';
import Dashboard from './dashboard/Dashboard';
import UsoInternoFinanzas from './components/Form/UsoInterno/UsointernoFinanzasForm';
import UsoInternoDGEC from './components/Form/UsoInterno/UsointernoDGEC';
import UsointernoDireccionEstudios from './components/Form/UsoInterno/UsointernoDireccionEstudios';
import Formulario from './Formulario';

const App = () => {
  const handleLogin = () => {
  };
    return (
      <Router>
        <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Dashboard/>} />
          <Route path="/formulario" element={<Formulario/>} />

          <Route path="/finanzas" element={<UsoInternoFinanzas />} />
          <Route path="/Dgec" element={<UsoInternoDGEC />} />
          <Route path="/DireccionEstudios" element={<UsointernoDireccionEstudios/>} /> 
       </Routes>
       </AuthProvider>   
      </Router>
    );
  };

export default App;