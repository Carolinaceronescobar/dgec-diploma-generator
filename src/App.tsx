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
import Formulario from './Formulario'

const App = () => {
  const handleLogin = () => {
  };
    return (
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/formulario" element={<Formulario />} />
           </Routes>
      </Router>
    );
  };

//  return (
//   <Router>
//     <AuthProvider>
//       <Routes>
//       <Route path="/login" element={<LoginPage />} />
//         <Route path="/register" element={<RegistroPage />} />
//            <PrivateRoute path="/formulario-creacion-programa" roles={['usuarioDirector']}>
//           <div>
//             <TopBar />
//             <div className="container">
//               <h1>Solicitud Creación de Programa</h1>
//               <HorizontalLinearStepper />
//             </div>
//             <Footer />
//           </div>
//         </PrivateRoute>
//         {/* Otras rutas */}
//       </Routes>
//     </AuthProvider>
//   </Router>
// );
// }; 
export default App;