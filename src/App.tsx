// App.tsx
import React from 'react';
import TopBar from './components/TopBar';
import HorizontalLinearStepper from './components/HorizontalLinearStepper';
import './App.css'; // Ruta correcta al archivo de estilo CSS

const App: React.FC = () => {
  return (
    <div>
      <TopBar />
      <div className="container">
        <h1>Solicitud Creación de Programa</h1>
        <HorizontalLinearStepper/>
      </div>
    </div>
  );
};
    
export default App;
