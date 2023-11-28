// App.tsx
import React from 'react';
import TopBar from './components/TopBar';
import HorizontalLinearStepper from './components/HorizontalLinearStepper';
import Footer from './components/Footer'; // Importa el componente Footer
import './App.css'; // Ruta correcta al archivo de estilo CSS
import AppRoutes from './Routes';

const App: React.FC = () => {
  return (
    <div>
      <TopBar />
      <div className="container">
        <h1>Solicitud Creación de Programa</h1>
        <AppRoutes />
        <HorizontalLinearStepper/>
      </div>
      <Footer />
    </div>
  
  );

};
    
export default App;
