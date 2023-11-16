// src/App.tsx
import React from 'react';
import Form from './Components/Form';

const App: React.FC = () => {
  const handleFormSubmit = (formData: Record<string, string>) => {
    // Aquí puedes procesar los datos del formulario
    console.log('Form Data:', formData);
  };

  return (
    <div>
      <h1>Formulario Dinámico</h1>
      <Form onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
