import React from 'react';
import TopBar from './components/TopBar';
import HorizontalLinearStepper from './components/HorizontalLinearStepper';
import Footer from './components/Footer'; // Importa el componente Footer
import './App.css'; // Ruta correcta al archivo de estilo CSS
import { PrivateRoute } from './auth/PrivateRoute';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import SolicitudesTabla from './dashboard/SolicitudesForm';

function obtenerSolicitudes (){
  return  [{
    id: 1,
    fecha: '2023-01-01',
    programa: 'Programa 1',
    departamento: 'Departamento 1',
    campus: 'Campus 1',
    estado: 'Pendiente',
    revisionDGEC: false,
    revisionDIREST: false,
    revisionFINANZAS: false,
}];

}
 const App = () => {
  const solicitudesData = obtenerSolicitudes() ; // Por ejemplo, una función para obtener las solicitudes
  return (
    <div>
      <TopBar />
      <div className="container">
   <h1>Solicitud Creación de Programa</h1>
   <HorizontalLinearStepper />
 </div>
      <Footer />
    </div>
  );
}
export default App;

// const App = () => {
//     const FormularioCompleto = () => {
//     };

//     // return (
//     //         <PrivateRoute path="/formulario-creacion-programa" roles={['usuarioDirector']}>
//     //             <div>
//     //               <TopBar />
//     //               <div className="container">
//     //                 <h1>Solicitud Creación de Programa</h1>
//     //                 <HorizontalLinearStepper />
//     //               </div>
//     //               <Footer />
//     //             </div>
//     //           </PrivateRoute>
             
//     //   );

//     return (
//         <Router>
//           <AuthProvider>
//             <Routes>
//             <PrivateRoute path="/formulario-creacion-programa" roles={['usuarioDirector']}>
//                 <div>
//                   <TopBar />
//                   <div className="container">
//                     <h1>Solicitud Creación de Programa</h1>
//                     <HorizontalLinearStepper />
//                   </div>
//                   <Footer />
//                 </div>
//               </PrivateRoute>
//               {/* Otras rutas */}
//             </Routes>
//           </AuthProvider>
//         </Router>
//       );
//  }
// export default App;